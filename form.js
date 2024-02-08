const express = require("express");
const app = require();
app.set("viewengine", "jade");
app.set("views", "./views");
app.get("/form", function (req, res) {
  res.render("form");
});
app.listen(3000, function () {
  console.log("3000포트로 연결");
});
