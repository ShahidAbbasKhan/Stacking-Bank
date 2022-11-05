
const hre = require("hardhat");

async function main() {
  
  const Stacking = await hre.ethers.getContractFactory("Stacking");
  const stacking = await Stacking.deploy();

  await stacking.deployed();

  console.log(
    `contract is deployed  to ${stacking.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
