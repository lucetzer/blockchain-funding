pragma solidity ^0.4.21;

contract Funding {

    address public owner;
    uint public raised;

    function Funding() public {
        owner = msg.sender;
    }

    function donate() public payable {
        raised += msg.value;
    }

}