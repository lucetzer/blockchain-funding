var Funding = artifacts.require("./Funding.sol");

contract("Funding", (accounts) => {

  const [account1, account2] = accounts;

  it("shouldSetAnOwnerDuringCreation", async () => {
    const contract = await Funding.deployed();
    const owner = await contract.owner();
    assert.equal(owner, account1);
  });

});