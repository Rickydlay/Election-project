const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const electionRoutes = require('./routes/electionRoutes'); // Import Routes
const ResultModel = require("./models/ResultModel"); // Ensure this file exists!

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/results', electionRoutes);

// Test Route
app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is connected to frontend!" });
});

// Results Route (Ensure this matches frontend fetch request)
app.get("/results", async (req, res) => {
    try {
        const results = await ResultModel.find(); // Fetch results from MongoDB

        // Add start property using createdAt timestamp
        const formattedResults = results.map(result => ({
            ...result.toObject(), // Convert Mongoose document to plain object
            start: result.createdAt ? new Date(result.createdAt).getTime() : Date.now()
        }));

        res.json(formattedResults);
    } catch (error) {
        console.error("Error fetching results:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { dbName: "vicky-election-verification" })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
