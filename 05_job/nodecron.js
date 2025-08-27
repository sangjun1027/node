// nodecron.js
// 작업 스케쥴 설정하기
const cron = require("node-cron");

cron.schedule("10 15 * * * *", () => {
  // schedule:함수다잉!
  // * 왼쪽부터 : 초, 분, 시, 일, 월, 요일
  // 첫번째(*)가 실행 할 시간, 두번째가 실행 할 함수
  let current = new Date();
  console.log(current.toISOString() + " -> cron실행됨."); //toISOString 메소드
});
