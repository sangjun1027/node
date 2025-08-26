// fs_write.js
const fs = require("fs"); //import

fs.writeFile("./file_write.txt", "안뇽하셈? 안뇽못함!", "utf8", (err) => {
  // 두번째가 txt에 들어갈 내용, 세번째가 인코딩, 마지막이 callback함수
  // 실습) fs.readfile / fs.readfolesync 활용해서 stdout.log 정보를 읽어들이고...
  //      ""./file_log.txt", 에 내용을 담자

  // "./file_write.txt",
  // \n"안뇽하셈? 안뇽못함!/n",
  // {encoding:"utf8", flag: "a"    / 추가
  // (err) => {
  if (err) {
    console.err("예외발생");
    return;
  }
  console.log("파일생성완료!");
});

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

/*
let errBuf = fs.readFile("./stdout.log", "utf8");
if(err) {
  console.log(errBuf);
}

fs.writeFile(
  "./file_log.txt", 
  errBuf,
  {encoding:"utf8", flag: "a" }  
  (err) => {
    if (err) {
      console.err("예외발생");
      return;
  }
  console.log("파일생성완료!");
}
)
*/
