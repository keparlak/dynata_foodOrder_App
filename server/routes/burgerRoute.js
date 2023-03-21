const express = require("express");
const burgerModel = require("../models/BurgerModel");
const router = express.Router();

// GET ALL FOOD SERVİSİ

app.get("/getFoods", async (req, res) => {
  try {
    const foods = await burgerModel.find({});
    res.send(foods);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
