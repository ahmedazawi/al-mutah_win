const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "assets")));

app.get("/", (req, res, next) => {
  if (req.cookies.mutah_LANG === "AR") {
    res.sendFile(path.join(__dirname, "client", "views", "index-ar.html"));
  } else if (req.cookies.mutah_LANG === "EN") {
    res.sendFile(path.join(__dirname, "client", "views", "index-en.html"));
  } else {
    res.sendFile(path.join(__dirname, "client", "views", "index-ar.html"));
  }
});
app.listen(3000);
