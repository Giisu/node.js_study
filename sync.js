const fs = require("fs");
// console.log(1);
// let data = fs.readFileSync("data.txt", { encoding: "utf8" });
// console.log(data);
// 싱크 방식
console.log(2);
let data = fs.readFile("data.txt", { encoding: "utf8" }, function (err, data) {
  console.log(3);
  console.log(data);
});
console.log(4);
