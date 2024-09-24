require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { RPC_URL, SECRET_KEY, ETHERSCAN_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: RPC_URL || "",
      accounts: SECRET_KEY !== undefined ? [SECRET_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_KEY || "",
    },
  },
};
