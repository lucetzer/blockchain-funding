var Funding = artifacts.require("./Funding.sol");

contract("Funding", (accounts) => {

  const FINNEY = 10 ** 15
  const [account1, account2] = accounts;
  let contract;

  beforeEach('setup contract for each test', async () => {
      contract = await Funding.new();
  })

  it("shouldSetAnOwnerDuringCreation", async () => {
    const owner = await contract.owner();
    assert.equal(owner, account1);
  });

  it("accepts donations from accounts", async () => {
    await contract.donate({from: account1, value: 10 * FINNEY});
    await contract.donate({from: account2, value: 20 * FINNEY});
    assert.equal(await contract.raised.call(), 30 * FINNEY);
  });

});