const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Recaps collection and inserts the recaps below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/100Days"
);

const recapSeed = [
  {
    dayNumber: "1",
    description: "For the first day of the coding challenge I set up a very basic website to track my progress.",
    duration: "1 Hour, 1 Minute",
    repo:"https://github.com/aubrey-heim/100-days-of-code",
    date: "1615232779635.0"
  }
];

db.Recap.remove({})
  .then(() => db.Recap.collection.insertMany(recapSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
