const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recapSchema = new Schema({
  dayNumber: { type: Number, required: true },
  description: { type: String, required: true },
  duration: String,
  date: { type: Date, default: Date.now },
});

const Recap = mongoose.model("Recap", recapSchema);

module.exports = Recap;
