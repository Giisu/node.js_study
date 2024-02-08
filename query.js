const express = require("express");
const app = express();
app.set("viewengine", "jade");
app.set("views", "./views");
app.use(express.static("public"));
app.get("/topic", function (req, res) {
  let query = req.query;
  let topics = ["t1", "t2", "t3"];

  let link = `
    <a href="/topic?id=0">t1</a><br>
    <a href="/topic?id=1">t2</a><br>
    <a href="/topic?id=2">t3</a><br><br>
    ${topics[query.id]}`;
  res.send(link);
});
app.listen(3000, function () {
  console.log("connected 3000 port");
});
