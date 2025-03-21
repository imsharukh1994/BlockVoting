pragma solidity ^0.8.0;

contract BlockVoting {
    struct Election {
        uint id;
        string name;
        string description;
        uint startTime;
        uint endTime;
        bool active;
    }

    address public government;
    uint public electionCount;
    mapping(uint => Election) public elections;

    modifier onlyGovernment() {
        require(msg.sender == government, "Not authorized");
        _;
    }

    constructor() {
        government = msg.sender;
        electionCount = 0;
    }

    function createElection(string memory _name, string memory _description, uint _startTime, uint _endTime) public onlyGovernment {
        require(_startTime < _endTime, "Invalid time range");
        electionCount++;
        elections[electionCount] = Election(electionCount, _name, _description, _startTime, _endTime, true);
    }

    function updateElection(uint _id, string memory _name, string memory _description, uint _startTime, uint _endTime, bool _active) public onlyGovernment {
        require(_id > 0 && _id <= electionCount, "Election does not exist");
        require(_startTime < _endTime, "Invalid time range");

        Election storage election = elections[_id];
        election.name = _name;
        election.description = _description;
        election.startTime = _startTime;
        election.endTime = _endTime;
        election.active = _active;
    }

    function getElection(uint _id) public view returns (uint, string memory, string memory, uint, uint, bool) {
        require(_id > 0 && _id <= electionCount, "Election does not exist");
        Election memory election = elections[_id];
        return (election.id, election.name, election.description, election.startTime, election.endTime, election.active);
    }
}
