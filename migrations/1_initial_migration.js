var Migrations = artifacts.require("./Migrations.sol");
var Funding = artifacts.require('./Funding.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Funding);
};
