// module에는 이미 만들어져있는 기능(?)들이 있다.
// 그 중 console 기능
// ex)console.log()  : console는 갹체, log는 메소드

// console_class.js
const { Console } = require("console");
const fs = require("fs");
const { defaultNum } = require("./helloworld");

const output = fs.createWriteStream("./stdout.log");
const errput = fs.createWriteStream("./stderr.log");

const logger = new Console({ stdout: output, stderr: errput });
logger.log("디폴트값: %d", defaultNum);
logger.error("에러가 발생했습니다.");

for (let i = 0; i < 10; i++) {
  logger.log(`i의 값은 ${i}`); // 파일에 작성
  console.log(`i의 값은 ${i}`); // console에 출력
}
