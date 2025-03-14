const hre = require("hardhat");

async function main() {
  const Election = await hre.ethers.getContractFactory("Election");

  // ✅ Pass an array of candidate names (matching constructor's expected input)
  const election = await Election.deploy(["Candidate A", "Candidate B", "Candidate C", "Candidate D"]);

  await election.waitForDeployment(); // Wait for deployment

  console.log(`✅ Election contract deployed at: ${election.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});