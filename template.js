const express = require("express");
const app = express();
app.locals.pretty = true;
app.set("view engine", "jade");
// view engine은 템플릿 엔진이라는 뜻. jade를 사용한다는 선언
app.set("views", "./views");
// 디렉토리 설정. views로 할거면 생략 가능
app.use(express.static("public"));
app.get("/template", function (req, res) {
  res.render("temp", { time: Date() });
  //   temp에서 사용할 변수
  // temp파일을 렌더링하여 전송한다.
});
app.get("/", function (req, res) {
  res.send("homepage");
});
app.get("/dynamics", function (req, res) {
  let output = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>testtt dyn.html</h1>
      </body>
    </html>
    `;
  res.send(output);
});
app.get("/login", function (req, res) {
  res.send("login page");
});
// 사용자가 get방식으로 접속할 때, '/'는 home으로 접속을 의미. 또한 get의 콜백함수는 인자로서 request, response를 가져야한다.
// 즉 사용자가 어떠한 경로로 들어왔을 때의 요청, 응답을 처리하는 메소드. 이러한 것을 라우터라고 부름(전달자).
app.listen(3000, function () {
  console.log("connected 3000 port");
});
