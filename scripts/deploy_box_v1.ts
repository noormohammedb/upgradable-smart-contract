import { ethers, upgrades } from "hardhat";

async function main() {
  const BoxV1 = await ethers.getContractFactory("BoxV1");

  const boxV1 = await upgrades.deployProxy(BoxV1, [29], {
    initializer: "initializer",
  });

  await boxV1.deployed();

  console.log("BoxV1 deployed to : ", boxV1.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
