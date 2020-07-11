const ProxyDelegate = artifacts.require("ProxyDelegate");
const ProxyDelegateNew = artifacts.require("ProxyDelegateNew");
const SomeLibrary = artifacts.require("SomeLibrary");

module.exports = function (deployer) {
  deployer
    .deploy(SomeLibrary)
    .then(() => deployer.deploy(ProxyDelegate, SomeLibrary.address))
    .then(() => deployer.deploy(ProxyDelegateNew, SomeLibrary.address));
};
