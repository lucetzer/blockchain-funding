const Funding = artifacts.require("./Funding.sol");

contract("Funding", (accounts) => {

  const DAY = 3600 * 24;
  const FINNEY = 10 ** 15
  const [account1, account2] = accounts;
  let contract;

  beforeEach('setup contract for each test', async () => {
      contract = await Funding.new(DAY);
  })

  it("shouldSetAnOwnerDuringCreation", async () => {
    const owner = await contract.owner();
    assert.equal(owner, account1);
  });

  it("accepts donations from accounts", async () => {
    await contract.donate({ from: account1, value: 10 * FINNEY });
    await contract.donate({ from: account2, value: 20 * FINNEY });
    assert.equal(await contract.raised.call(), 30 * FINNEY);
  });

  it("keeps track of donator balance", async () => {
    await contract.donate({ from: account1, value: 5 * FINNEY });
    await contract.donate({ from: account2, value: 15 * FINNEY });
    await contract.donate({ from: account2, value: 3 * FINNEY });
    assert.equal(await contract.balances.call(account1), 5 * FINNEY);
    assert.equal(await contract.balances.call(account2), 18 * FINNEY);
  });

  it("finishes fundraising when time is up", async () => {
    assert.equal(await contract.isFinished.call(), false);
    await increaseTime(DAY);
    assert.equal(await contract.isFinished.call(), true);
  });


});