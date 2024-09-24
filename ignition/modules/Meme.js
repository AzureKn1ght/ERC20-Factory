// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Meme", (m) => {
  const meme = m.contract("MemeToken", [
    "0x00000051C8564b0572FF2551366eEB88a1190211",
    "MemeToken",
    "MTK",
  ]);

  return { meme };
});
