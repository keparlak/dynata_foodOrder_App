const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

//!REGISTER SERVICES
router.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;

  const oldUser = await UserModel.findOne({ mail: mail });
  if (oldUser) {
    res.status(400).json({ message: "Böyle bir kullanıcı bulunmaktadır." });
  } else {
    const newUser = new UserModel({
      name: name,
      mail: mail,
      password: password,
    });
    try {
      await newUser.save();
      res.send("User register is succesfull");
    } catch (error) {
      res.send("User register is failed");
    }
  }
});
//!LOGIN SERVICES
router.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  try {
    const user = await UserModel.find({ mail: mail, password: password });
    if (user.length > 0) {
      res.send(user[0]);
    } else {
      res.status(400).json({ message: "User not found." });
    }
  } catch (error) {
    res.send(error);
  }
});

//!GET ALL USERS SERVICES
router.get("/getAllUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

//!DELETE USER SERVICES
router.post("/deleteUser", async (req, res) => {
  const userid = req.body.userid;

  try {
    await UserModel.findOneAndDelete({ _id: userid });
    res.send("Kullanıcı silme başarılı");
  } catch {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
