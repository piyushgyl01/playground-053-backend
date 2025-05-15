const mongoose = require("mongoose");
require("dotenv").config();

const MONGOURI = process.env.MONGODB;

async function connectToDB() {
  await mongoose
    .connect(MONGOURI)
    .then(() => console.log("Connected to DB"))
    .catch((e) => {
      console.log("Error occurred while connecting to DB", e);
    });
}

module.exports = { connectToDB };
