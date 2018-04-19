### Solidity with TDD

This is a fundraising application that allows users to donate and keep track of their balances.

##### Installation

```npm install```

##### To run in console

```npm start```

##### To run tests

``` truffle test ``` or ```npm run test```

##### Dependencies

* Truffle - testing development environment
* Mocha for tests
* Ganache-cli - commandline for Truffle's blockchain server that displays your transactions

##### Folder structure/files

* contracts - contains the source code for contracts.
* migrations - contains scripts to deploy contracts
* [truffle.js](http://truffleframework.com/docs/advanced/configuration) - truffle configuration file e.g. specify network available during migrations.
You can also specific gas, gasPrice, from address however if unspecified, truffle to provide default values.

##### Terms

* [Ether](http://ethdocs.org/en/latest/ether.html) is the currency used in Ethereum.
The base unit of ether is called Wei. 1 Ether = 1000000000000000000 Wei or 1e18.
1 finney is 1e15 wei or 1000 finney = 1 ether.

