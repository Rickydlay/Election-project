const hre = require("hardhat");

async function main() {
    const Election = await hre.ethers.getContractFactory("Election");
    const election = await Election.deploy(); // Deploy contract

    await election.waitForDeployment(); // Correct method for deployment

    console.log(`Election contract deployed at: ${await election.getAddress()}`);
}
app.get("/results", async (req, res) => {
    try {
        const results = await ResultModel.find(); // If using MongoDB
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
