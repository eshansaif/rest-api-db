const express = require("express");
const connectDb = require("./config/db");
connectDb();
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// routes not found
app.use((req, res, nex) => {
  res.status(404).send({
    message: "resource not found",
  });
});

// server error handling
app.use((err, req, res, nex) => {
  res.status(500).send({
    message: "Something broken",
  });
});

module.exports = app;
