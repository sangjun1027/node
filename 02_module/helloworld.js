//console에 "hello, world"구문을 출력하는 함수 function을 선언.
// module는 특정기능은 보여주고, 특정기능은 숨김
function myFunc() {
  console.log("hello,world");
}

const defaultNum = 12;

const sum = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};
// myFunc();
// myFunc라는 함수를 다른 파일에서도 쓰고싶을 때
// export { myFunc, defaultNum, sum };

module.exports = {
  // 위 처럼 import해도되고, module.exportrs해도 된다
  myFunc,
  defaultNum,
  sum,
};
