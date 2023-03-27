const express = require("express");
const burgerModel = require("../models/BurgerModel");
const router = express.Router();
const app = express();

//GET ALL FOODS SERVİSİ
router.get("/getBurgers", async (req, res) => {
  try {
    const foods = await burgerModel.find({});
    res.send(foods);
  } catch (err) {
    console.log(err);
  }
});

//SİLME SERVİSİ
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

//menü ekleme servisi
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

module.exports = router;
