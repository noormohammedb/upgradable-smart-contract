import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";
import { config as envConfig } from "dotenv";
envConfig();

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: process.env.NODE_API,
      accounts: [process.env.PRI_KEY!],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
