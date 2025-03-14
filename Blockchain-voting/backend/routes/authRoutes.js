const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Voter = require("../models/Voter");
require("dotenv").config();

const router = express.Router();

// Voter Registration
router.post("/register", async (req, res) => {
  const { nin, name, age, password } = req.body;

  if (age < 18) return res.status(400).json({ error: "Must be 18+ to vote" });

  const existingVoter = await Voter.findOne({ nin });
  if (existingVoter) return res.status(400).json({ error: "Voter already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newVoter = new Voter({ nin, name, age, password: hashedPassword });

  await newVoter.save();
  res.status(201).json({ message: "Registration successful!" });
});

// Voter Login
router.post("/login", async (req, res) => {
  const { nin, password } = req.body;
  const voter = await Voter.findOne({ nin });

  if (!voter) return res.status(404).json({ error: "Voter not found" });

  const isMatch = await bcrypt.compare(password, voter.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: voter._id, nin: voter.nin }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, message: "Login successful!" });
});

module.exports = router;
