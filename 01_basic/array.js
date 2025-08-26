// [].sort()    배열에서만 사용가능한 함수 sort / 예시로 써보자!

let fruits = ["apple", "cherry", "banana"];

fruits.sort(); //배열안의 값의 위치를 정렬시켜주는 함수, 가나다 순 정렬

fruits.forEach((fruit) => {
  console.log(fruit);
});

let numbers = [1, 10, 100, 2, 12, 44];
numbers.sort(function (a, b) {
  //정렬기준을 넣어줄 수 있다
  if (a > b) {
    return 1; //위치를 변경 : 양의 값
  } else {
    return -1; // 위치를 유지 : 음의 값
  }
});
// a,b 두개 값을 비교한다
numbers.forEach((number) => {
  console.log(number);
});

// filter() / 배열에서 사용가능, filter는 return하는 새로운 method를 생성
// 즉, filter는 어떠한 조건을 만족하는 새로운배열을 생성해주는 기능
[10, 23, 46, 17, 56]
  .filter((elem, idx, ary) => {
    //함수가 매개값으로 옴, 예시로 익명함수, 화살표함수
    // elem은 배열의 요소를 가르키고, idx는 배열의 순서, ary는 배열 그 자체를
    console.log(elem);
    if (elem > 30) {
      // 30보다 큰 값을 생성
      return true;
    }
  }) //return된 값을 forEach로 다시 돌린 것
  .forEach((elem) => {
    console.log(elem); // 46, 56
  });

// 배열에 있는 type이 object type인 경우
[
  { name: "Hong", point: 10 },
  { name: "Kim", point: 23 },
  { name: "Park", point: 46 },
  { name: "Choi", point: 17 },
  { name: "Hwang", point: 56 },
];
filter((elem, idx, ary) => {
  if (elem.point > 30) {
    //point를 기준으로
    // 30보다 큰 사람을 생성
    return true;
  }
}).forEach((elem) => {
  consolelog("이름 : " + elem.name);
});
