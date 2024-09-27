require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { RPC_URL, BSC_TEST, BSC_RPC, SECRET_KEY, ETHERSCAN_KEY, BSCSCAN_KEY } =
  process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: RPC_URL || "",
      accounts: SECRET_KEY !== undefined ? [SECRET_KEY] : [],
    },
    bscTestnet: {
      url: BSC_TEST || "",
      accounts: SECRET_KEY !== undefined ? [SECRET_KEY] : [],
    },
    bsc: {
      url: BSC_RPC || "",
      accounts: SECRET_KEY !== undefined ? [SECRET_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_KEY || "",
      bscTestnet: BSCSCAN_KEY || "",
      bsc: BSCSCAN_KEY || "",
    },
  },
};
