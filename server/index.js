//express paketini tanımladık
const express = require("express");
//cors paketini tanımladık.
const cors = require("cors");
//app middleware ile birlikte express kütüphanesine erişim sağlıyoruz..
const app = express();

//db için hazırlanan js dosyasını çağırıyoruz..
const db = require("./db");
const burgerModel = require("./models/BurgerModel");
const burgersRoute = require("./routes/burgerRoute");

//middlewareimiz ile cors kütüphanesini kullanmayı ve json req ve res'lerinde hata almanın önüne geçtik.
app.use(express.json());
app.use(cors());

//servisleri route ile çağırıyoruz
app.use("/api/burgers", burgersRoute);

//server'ımız çağıracağımız portu belirledik.
var port = 4000;
app.listen(4000, () => {
  console.log(
    `Food Order Serverı ${port} portunda başarıyla ayağa kalktı. 🔥🔥🔥`
  );
});
