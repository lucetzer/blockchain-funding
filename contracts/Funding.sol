pragma solidity ^0.4.21;

contract Funding {

    address public owner;
    uint public raised;

    mapping(address => uint) public balances;

    function Funding() public {
        owner = msg.sender;
    }

    function donate() public payable {
        balances[msg.sender] += msg.value;
        raised += msg.value;
    }

}