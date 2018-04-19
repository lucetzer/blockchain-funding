var Migrations = artifacts.require("./Migrations.sol");
//The name specified should match the name of the contract definition WITHIN that source file, not the name of the file itself

module.exports = function(deployer) {
  deployer.deploy(Migrations);  //deployment steps so you can deploy more than one contract
};
