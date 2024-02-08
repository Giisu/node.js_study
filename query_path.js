const express = require("express");
const app = express();
app.set("viewengine", "jade");
app.set("views", "./views");
app.use(express.static("public"));
app.get("/topic/:id/:mode", function (req, res) {
  // /뒤에 오는 값을 받아줄 수 있음. :뒤의 변수명을 name으로 했다면 params.name으로 당연히 해줘야함.
  //   또한 path/path 등 하위속성의 값도 위처럼 받아올 수 있음.
  let query = req.params;
  //   params를 통해 cementic url 구현 가능
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
