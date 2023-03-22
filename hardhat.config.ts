import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";
import { config as envConfig } from "dotenv";
envConfig();

import "hardhat-ethernal";

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    sepolia: {
      url: process.env.NODE_API,
      accounts: [process.env.PRI_KEY!],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
