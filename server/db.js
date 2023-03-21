require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

//!connection'ın açık kapalı olmasına göre iki farklı opsiyon verdiğimiz veritabanını dinleyen metotları yazalım.

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB bağlantısı başarıyla sağlandı. ✔");
});
db.on("error", () => {
  console.log("Mongo DB bağlantısı yapılamadı. ❌");
});

module.exports = mongoose;
