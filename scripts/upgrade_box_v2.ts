import { ethers, upgrades } from "hardhat";

// const PROXY = "0xc7C3D990cA29d907Da93E5b46b6f9443c2F2248A";

import { proxies } from "../.openzeppelin/unknown-11155111.json";
const PROXY = proxies[0].address;

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  // const BoxV2Contract = await upgrades.forceImport(PROXY, BoxV2);

  // let upgraded = await upgrades.upgradeProxy(PROXY, BoxV2);
  // console.log("upgraded:", upgraded);

  // console.log("==============================");
  // let txRecipt = await upgraded.deployTransaction.wait();
  // console.log("txRecipt:", txRecipt);

  console.log("Box Upgraded");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
