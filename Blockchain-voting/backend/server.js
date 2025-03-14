const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { ethers } = require("ethers");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes for Authentication (Existing Routes)
app.use("/api/auth", authRoutes);

// 🔗 Connect to Hardhat Blockchain (Fix: Removed ENS resolution)
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// ⚠️ Use environment variable for security!
const privateKey = process.env.PRIVATE_KEY;
if (!privateKey) {
  console.error("❌ ERROR: Private Key not found in environment variables.");
  process.exit(1);
}
const wallet = new ethers.Wallet(privateKey, provider);

// ⚠️ Replace this with your actual deployed contract address
const contractAddress = process.env.CONTRACT_ADDRESS || "0x5FbDB2315678afecb367f032d93F642f64180aa3";  

// ABI for interacting with the contract
const abi = [
  "function vote(uint candidateId) public",
  "function getResults(uint candidateId) public view returns (uint)"
];

// Connect to the smart contract
const electionContract = new ethers.Contract(contractAddress, abi, wallet);

// 📌 API to Cast a Vote
app.post("/vote", async (req, res) => {
  try {
    const { candidateId } = req.body;
    const tx = await electionContract.vote(candidateId);
    await tx.wait(); // Wait for transaction confirmation
    res.json({ message: "✅ Vote cast successfully!" });
  } catch (error) {
    console.error("❌ Voting Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// 📌 API to Fetch Election Results
app.get("/results/:id", async (req, res) => {
  try {
    const candidateId = req.params.id;
    const votes = await electionContract.getResults(candidateId);
    res.json({ candidateId, votes: votes.toString() });
  } catch (error) {
    console.error("❌ Fetching Results Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Backend is working!" });
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
