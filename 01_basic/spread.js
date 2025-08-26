// ... args 펼침연산자
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];

let result = [...ar1, ...ar2];
//↑배열변수 앞에 점(.)3개 찍으면 배열요소를 하나하나 펼쳐 보여줌

console.log(result);

let str = "abcde";
console.log(...str);
// 점점점(...)은 배열도 분해하고, 문자열도 분해한다. 피라냐같은 색퀴! 개지림!

// Object Destructuring
let obj = {
  firstName: "kildong",
  lastName: "Hong",
  age: 20,
};

let fn = obj.firstName;
let ln = obj.lastName;
let ag = obj.age;

//한 방에 펼쳐서 넣어줄 수 있음 ↓
let { firstName, lastName, age } = obj;
console.log(firstName, lastName, age);

// Array Destructuring
let ary = [1, 2, 3];

let a = ary[0];
let b = ary[1];
let c = ary[2];

let [n1, n2, n3] = ary;

// Default function parameter
// 함수의 매개변수의 기본값을 제공해주는 방식
function sum(num1 = 0, num2 = 0) {
  //  if (num2 == undefined) {
  //    if (num1 == undefined) return 0;
  //    return num1;
  //  }
  // 주석처리 된 부분은 코드가 길기에, 매개변수에 0으로 초기값 설정해주면
  // undefined가 되는 경우 0 이 들어간다                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             0
  let result = num1 + num2;
  return result;
}
console.log(sum() + sum(1, 1));
// javascript는 2번째 매개변구 값이 없으면 Non으로 출력
// 변수를 선언할 때 매개변수가 아무 것도 안들어올 때
