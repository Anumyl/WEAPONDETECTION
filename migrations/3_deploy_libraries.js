var lib = artifacts.require("./Set.sol");
var WeaponDetection = artifacts.require("./WeaponDetection.sol");

module.exports = function (deployer) {
  deployer.deploy(lib);
  deployer.link(lib, WeaponDetection);
  deployer.deploy(WeaponDetection);
};


