// [].reduce().
let result = [10, 15, 20, 25, 30].reduce((acc, elem) => {
  // 배열 매개변수에서는 안의 값이 정해져있다(?) , 즉, 약속!
  // reduce는 하나는 함수, 하나는 초기값으로 쓸
  // acc : 이전 / elem : 현재값
  console.log(acc, elem);
  // 순번 : 첫 번째: 0, 10 / elem값은 10
  //        두 번째: 10, 15
  //        세 번째 : 15, 20
  //        ...
  //        다섯 번째 : 25, 30
  // 다섯 번째 까지 끝나면 reduce는 return값을
  return acc + elem; // return은 다음 순번의 acc값 / 즉, acc = return값이라는 소리(?)
}, 0); //0이 초기값
console.log(result);

// 실습예제)

let resultTwo = [10, 15, 20, 25, 30].reduce((acc, elem) => {
  // acc는 이전 값, elem은 현재 값
  console.log(acc, elem);
  if (elem % 2 == 0) {
    acc.push(elem);
  }
  return acc;
}, []); // [].push(10) / push라는 함수는 추가하는 기능
// push data가 초기값임.
// acc 자체가 이전 값을 나타내기에, 최초에는 이전이 없으니 초기값을 설정해줌
console.log(resultTwo); // [10, 20, 30]
