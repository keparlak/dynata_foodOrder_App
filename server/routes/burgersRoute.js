const express = require("express");
const burgerModel = require("../models/BurgerModel");
const router = express.Router();
const app = express();

//!GET ALL FOODS SERVICES
router.get("/getBurgers", async (req, res) => {
  try {
    const foods = await burgerModel.find({});
    res.send(foods);
  } catch (err) {
    console.log(err);
  }
});

//!DELETE BURGERS SERVICES
router.post("/deleteBurger", async (req, res) => {
  const burgerid = req.body.burgerid;
  // const { burgerid } = req.body;
  try {
    await burgerModel.findOneAndDelete({ _id: burgerid });
    res.send("Menü silme başarılı");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//!ADD MENU SERVICES
router.post("/addBurger", async (req, res) => {
  const menu = req.body.menu;

  try {
    const newMenu = new burgerModel({
      ad: menu.ad,
      ozellik: ["small", "medium", "mega"],
      img: menu.img,
      desc: menu.desc,
      kategori: menu.kategori,
      fiyat: [menu.fiyat],
    });

    await newMenu.save();
    res.send("Menü Ekleme Başarılı");
  } catch (error) {}
});

//!GET BURGER BY ID SERVICES
router.post("/getBurgerById", async (req, res) => {
  const burgerid = req.body.burgerid;

  try {
    const burger = await burgerModel.findOne({ _id: burgerid });
    res.send(burger);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
module.exports = router;
