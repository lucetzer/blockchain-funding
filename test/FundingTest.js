var Funding = artifacts.require("./Funding.sol");

contract("Funding", (accounts) => {

  const FINNEY = 10 ** 15
  const [account1, account2] = accounts;

  it("shouldSetAnOwnerDuringCreation", async () => {
    const contract = await Funding.deployed();
    const owner = await contract.owner();
    assert.equal(owner, account1);
  });

  it("accepts donations from accounts", async () => {
    const contract = await Funding.deployed();
    await contract.donate({from: account1, value: 10 * FINNEY});
    await contract.donate({from: account2, value: 20 * FINNEY});
    assert.equal(await contract.raised.call(), 30 * FINNEY);
  });


});