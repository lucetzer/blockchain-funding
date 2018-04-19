const Funding = artifacts.require("./Funding.sol");

contract("Funding", (accounts) => {

  const DAY = 3600 * 24;
  const FINNEY = 10 ** 15
  const [account1, account2] = accounts;
  let contract;

  beforeEach('setup contract for each test', async () => {
      contract = await Funding.new();
      await contract.donate({ from: account1, value: 10 * FINNEY });
      await contract.donate({ from: account2, value: 20 * FINNEY });
  })

  it("shouldSetAnOwnerDuringCreation", async () => {
    const owner = await contract.owner();
    assert.equal(owner, account1);
  });

  it("accepts donations from accounts", async () => {
    assert.equal(await contract.raised.call(), 30 * FINNEY);
  });

  it("keeps track of donator balance", async () => {
    await contract.donate({ from: account2, value: 3 * FINNEY });
    assert.equal(await contract.balances.call(account1), 10 * FINNEY);
    assert.equal(await contract.balances.call(account2), 23 * FINNEY);
  });

  it("should create an event after a donation", async () => {
    contract = await Funding.new();
    return contract.donate({ from: account1, value: 10 * FINNEY }).then((response) => {
      assert.equal(response.logs[0].event, "logDonation");
      assert.equal(response.logs[0].args.sender, account1);
      assert.equal(response.logs[0].args.amount, 10 * FINNEY);
    });
  });

});