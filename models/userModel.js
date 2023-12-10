const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("Users", usersSchema);

module.exports = User;
