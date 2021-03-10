const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recapSchema = new Schema({
  dayNumber: { type: String, required: true },
  description: { type: String, required: true },
  duration: String,
  date: { type: Date, default: Date.now },
  repo: String
});

const Recap = mongoose.model("Recap", recapSchema);

module.exports = Recap;
