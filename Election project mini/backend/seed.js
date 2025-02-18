const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ResultModel = require("./models/ResultModel");

// Load environment variables first
dotenv.config();
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "vicky-election-verification",
            serverSelectionTimeoutMS: 5000 // 5 seconds timeout for initial connection
        });
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1); // Exit with failure
    }
}
// Then connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    dbName: "vicky-election-verification" 
})


const sampleResults = [
    { candidate: "John Doe", votes: 1200, pollingUnit: "PU-001" },
    { candidate: "Jane Smith", votes: 950, pollingUnit: "PU-002" },
    { candidate: "Alex Johnson", votes: 780, pollingUnit: "PU-003" }
];

async function seedDB() {
    try {
        await ResultModel.deleteMany({}); // Clear old data
        await ResultModel.insertMany(sampleResults);
        console.log("Database Seeded Successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
}

seedDB();
