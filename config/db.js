const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

// Debugging: Check if mongoURL is correctly loaded from .env
console.log("Mongo URL:", process.env.mongoURL);

const connection = mongoose.connect(process.env.mongoURL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = {
  connection
};
