const express = require("express");
const app = express();
app.set("view engine", "jade");
app.set("views", "./views");
app.use(express.static("public"));
app.get("/form_receiver", function (req, res) {
  let title = req.query.title;
  let desc = req.query.desc;
  // 위 쿼리스트링 타입은 jade(혹은 html)에서 input 태그의 name속성에서 지정해준 것.
  // 그 name에 따라 브라우저에서 자동으로 쿼리스트링 id를 생성하고 값은 input값을 지정해줌.
  // form태그 속성에서 method=post를 해주면 url에는 전송되는 데이터가 표시되지 않음. 기본값은 get
  res.send(title + desc);
});
app.get("/form", function (req, res) {
  res.render("form");
});
app.listen(3000, function () {
  console.log("3000포트로 연결");
});
