### Solidity with TDD


Understanding folder structure:

* Contracts - contains Solidity source files for smart contracts

* Migrations - Truffle uses a migration system to handle smart contract deployments.
A migration is an additional special smart contract that keeps track of changes.

* truffle.js contains truffle configuration files


Solidity:

* staticallly typed language

* has a unique type called address which are Ethereum addresses, stored as 20 byte values
Every account and smart contract on the Ethereum blockchain has an address
and can send and receive Ether to and from this address.

* payable allows a function to accept ether, without it the transaction will be rejected