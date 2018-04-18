pragma solidity ^0.4.4;

contract Funding {

    address public owner;

    function Funding() public {     //constructor
        owner = msg.sender;
    }

}