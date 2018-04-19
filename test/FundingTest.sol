pragma solidity ^0.4.21;

import "truffle/Assert.sol";
import "../contracts/Funding.sol";

// Example test in Solidity though I found javascript tests much easier to write.
// Solidity Assert.sol is also experiencing some compilation warnings that the Solidity team is aware of.

contract FundingTest {
    function testSettingAnOwnerDuringCreation() public {
        Funding funding = new Funding();
        Assert.equal(funding.owner(), this, "An owner is different than a deployer");
    }
}