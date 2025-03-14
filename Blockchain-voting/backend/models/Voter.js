const mongoose = require("mongoose");

const VoterSchema = new mongoose.Schema({
  nin: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  hasVoted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Voter", VoterSchema);
