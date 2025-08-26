//fs_read.js
const fs = require("fs");

fs.readFile("./stdout1.log", "utf8", (err, buf) => {
  // 비동기방식
  // 비동기(non블로킹) / 동기(블로킹) 인지 늘 파악
  // 첫번째 매개값이 읽어들일 file, 두번쨰는 인코딩방식, // 세번째가 나중에 실행 될 함수
  //정상적으로 읽어들였을 때에 callback함수가 3번째
  if (err) {
    console.error("예외발생");
    return;
  }
  console.log(buf);
});

let errBuf = fs.readFileSync("./stderr.log", "utf8");
// 동기방식
console.log(errBuf);

console.log("다른코드");
