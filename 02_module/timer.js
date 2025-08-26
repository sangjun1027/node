// timer.js
// 타이머 모듈의 모든함수는 '전역함수'
// 전역함수 : 실행 중인 코드 어디에서든 접근하여 사용할 수 있는 함수
// 종종 사용되는 함수이기에 알고있으면 Good
setTimeout(() => {
  console.log("1초후에 실행됩니다.");
}, 1000); // 1000 = 1초, 1초를 기다렸다가 실행됨

//setInterval(() => {
//  console.log("매 1초후에 실행됩니다.");
//}, 1000); // 1초마다 무한실행, ctrl + c 누르면 종료

const interval = setInterval(() => {
  console.log("매 1초 단위로 실행됩니다.");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000); // clearInterval을 5초 뒤에 실행

setImmediate(() => {
  console.log("코드 실행 후 실행"); // 이벤트루프 stack에 작업을 완료
  // queue에 작업을 실행하기 전 실행
});
let sum = 0;
for (let i = 0; i < 999999; i++) {
  sum += i;
}
console.log("sum=>" + sum);
