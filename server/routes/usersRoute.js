const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

//REGISTER SERVISI
router.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;
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
});

module.exports = router;
