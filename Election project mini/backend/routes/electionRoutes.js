const express = require('express');
const router = express.Router();
const ElectionResult = require('../models/ElectionResult'); // Model (to be created)
const asyncHandler = require('express-async-handler');

// @route   POST /api/results
// @desc    Upload election results (Admin only)
// @access  Public for now (later we secure it)
router.post('/', asyncHandler(async (req, res) => {
    const { pollingUnit, candidate, votes } = req.body;

    if (!pollingUnit || !candidate || !votes) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    const result = new ElectionResult({
        pollingUnit,
        candidate,
        votes
    });

    await result.save();
    res.status(201).json({ message: 'Result uploaded successfully' });
}));

// @route   GET /api/results
// @desc    Fetch all election results
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    const results = await ElectionResult.find();
    res.json(results);
}));

module.exports = router;
