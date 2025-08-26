// process_exe.js
// import process from "process";
// import os from "os";
const path = require("path");
// console.log(process.env); //  현재 실행되고있는 환경(정보)들을 볼 수 있음, value:key 형태로
//console.log(os); // system과 관련된 정보를 보여줌
console.log(__filename); // 현재 파일의 경로를 보여줌
console.log(__dirname); // 현재파일의 디렉토리 경로를 보여줌

console.log(path.basename(__filename)); //baswename은 가장 끝 경로만..., process_exe.js
console.log(path.basename(__dirname)); // 02_module

let result = path.format({ dir: "C:/User/admin", base: ".gitconfig" });
result = path.parse("C:/User/admin/.gitconfig");
console.log(result);
