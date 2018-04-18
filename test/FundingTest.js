var Funding = artifacts.require("./Funding.sol");

contract("Funding", function (accounts) {
  it("shouldSetAnOwnerDuringCreation", async function () {
    const contract = await Funding.deployed();
    const owner = await contract.owner();
    assert.equal(owner, accounts[0]);
  });
});