let name = "우상준";
let score = 99;

console.log("이름은 " + name + " 점수는 " + score);
console.log(
  `이름은 ${name}, 점수는 ${score} 합격여부 ${score > 60 ? "합격" : "불합격"}`
);
// ↑ TemplateLiteral / 연산식도 가능
[1, 2, 3].forEach((element) => {
  console.log(element);
});

function sum(num1, num2) {
  let result;
  result = num1 + num2;
  return result;
}

const NumberFormat = "2025.08.08";
// NumberFormat = "2025.08.08"; :상수변수는 재할당이 불가
for (let i = 1; i <= 5; i++) {
  //for문도 block
  if (i % 2) {
    // i를 2로 나눌 수 없다. 즉, 구문에 이상이있는 상황
    // javascriptr는 falsy(거짓같은 값)로 선언해주는 값이 있다. / 아래에있는 것들
    // 0, null, "", undefined
    // block안에서만 선언되면, 그 안에서만 유효한 값을 유지
    let name = "King";
  } else {
    // let name = "King"; // King이 할당 된 이 name이 없으면, 위의 변수 name이 출력됨
    console.log(name);
  }
}
if (score) {
  // true
  //조건문도 block
  //새로운 block 안에서는 다시 선언이 가능하다 / 그것은 즉, 새로운 변수이다
  let name = "우상준";
  console.log(name);
}
