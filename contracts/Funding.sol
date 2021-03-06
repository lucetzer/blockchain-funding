pragma solidity ^0.4.21;

contract Funding {

    address public owner;
    uint public raised;

    mapping(address => uint) public balances;

    function Funding() public {
        owner = msg.sender;
    }

    event logDonation(address sender, uint amount);
    // events helps track an occurrence. DApps can listen for this event and act upon it.

    function donate() public payable {
        balances[msg.sender] += msg.value;
        raised += msg.value;
        emit logDonation(msg.sender, msg.value); //use emit trigger an event
    }

}