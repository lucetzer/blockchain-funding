pragma solidity ^0.4.4;

// Generated by truffle upon initialisation and allows you to use the migrations feature ie truffle migrate
// Running Truffle migrate will run all the migrations located within your project's migration directory.
// If migrations ran were successful, running truffle migrate will run only newly created migrations.
// Use --reset to run migrations from the beginning.


contract Migrations {
  address public owner;
  uint public last_completed_migration;

  modifier restricted() { //function modifier - used to ensure certain conditions are met before proceeding.
    if (msg.sender == owner) _; // _; means continue executing rest of method body
  }

  function Migrations() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted { // will first check if the caller is restricted.
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
