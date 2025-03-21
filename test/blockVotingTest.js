const { expect } = require("chai");

describe("BlockVoting Contract", function () {
  it("Should create an election", async function () {
    const [owner] = await ethers.getSigners();
    const BlockVoting = await ethers.getContractFactory("BlockVoting");
    const contract = await BlockVoting.deploy();
    await contract.deployed();

    await contract.createElection("General Elections", "Nationwide voting", 1672531200, 1672617600);
    const election = await contract.getElection(1);

    expect(election[1]).to.equal("General Elections");
    expect(election[2]).to.equal("Nationwide voting");
  });
});
