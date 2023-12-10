const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

const dbConnect = async () => {
  await mongoose
    .connect(dbURL)
    .then((res) => {
      console.log("db is connected successfully");
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
    });
};

module.exports = dbConnect;
