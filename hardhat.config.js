require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { RPC_URL, BSC_TEST, SECRET_KEY, ETHERSCAN_KEY, BSCSCAN_KEY } =
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
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_KEY || "",
      bscTestnet: BSCSCAN_KEY || "",
    },
  },
};
