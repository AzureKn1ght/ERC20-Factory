// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Factory", (m) => {
  const factory = m.contract("TokenFactory");
  return { factory };
});

//npx hardhat ignition deploy ignition/modules/Factory.js --network bscTestnet --verify --deployment-id second-deploy
//second-deploy etc is optional