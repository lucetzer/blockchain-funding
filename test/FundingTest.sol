pragma solidity ^0.4.21;

import "truffle/Assert.sol";
import "../contracts/Funding.sol";

contract FundingTest {
    function testSettingAnOwnerDuringCreation() public {
        Funding funding = new Funding();
        Assert.equal(funding.owner(), this, "An owner is different than a deployer");
    }
}