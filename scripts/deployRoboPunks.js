
const hre = require("hardhat");


async function main() {
  
  // We get the contract to deploy
  const RoboPunks = await hre.ethers.getContractFactory("RoboPunks");
  const roboPunks = await RoboPunks.deploy();

  await roboPunks.deployed();

  console.log("RoboPunks deployed to:", roboPunks.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
