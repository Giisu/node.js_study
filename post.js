const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// app.use메소드는 코드상에 모듈을 붙이는것이라 생각하면 됨. 모든 요청들은 bodyparser를 통해 post를 이용한 전송들을 사용할 수 있도록 함
app.set("view engine", "jade");
app.set("views", "./views");
app.use(express.static("public"));
app.post("/post_receiver", function (req, res) {
  let title = req.body.title;
  let desc = req.body.desc;
  //   post방식으로 전송했을 경우 app.post 메소드를 사용. 또한 name을 받아올 때 body 메소드로 접근
  //   다만 express에서는 post전송방식의 body를 정의해놓지 않음. 따라서 body-parser라는 미들웨어를 사용해야 함.
  res.send(title + desc);
});
app.get("/post", function (req, res) {
  res.render("post");
});
app.listen(3000, function () {
  console.log("3000포트로 연결");
});
