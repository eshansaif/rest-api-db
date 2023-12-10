const User = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const allUser = await User.find().sort({ name: -1 });
    res.status(200).send({
      success: true,
      message: "All users found",
      data: allUser,
    });
  } catch (error) {
    res.status(404).send({
      message: "Users not found",
    });
  }
};
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const specificUSer = await User.findOne({ _id: id }, { name: 1 });
    res.status(200).send({
      message: "One user found",
      data: specificUSer,
    });
  } catch (error) {
    res.status(404).send({
      message: "User not found",
    });
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = new User({ name, email, phone });
    await newUser.save();
    res.status(201).send({
      message: "One user Created",
      data: newUser,
    });
  } catch (error) {
    res.status(404).send({
      message: "User not created",
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, phone } = req.body;
    const result = await User.updateOne(
      { _id: userId },
      { $set: { name: name } },
      { upsert: true }
    );
    res.status(201).send({
      success: true,
      message: "One user Updated",
      data: result,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "User not updated",
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.deleteOne({ _id: userId });
    res.status(201).send({
      message: "One user deleted",
      data: deletedUser,
    });
  } catch (error) {
    res.status(404).send({
      message: "User not deleted",
    });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
