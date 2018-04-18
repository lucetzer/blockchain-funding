pragma solidity ^0.4.21;

contract Funding {

    address public owner;

    function Funding() public {
        owner = msg.sender;
    }

}