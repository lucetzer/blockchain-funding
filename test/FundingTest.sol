pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "../contracts/Funding.sol";

contract FundingTest {

    function shouldSetAnOwnerDuringCreation() public {
        Funding funding = new Funding();
        Assert.equal(funding.owner(), this, "An owner is different than a deployer");
    }

}