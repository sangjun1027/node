// '객체'를 정의할 때 쓰여지는 것
// ex) 학생 : 학번, 이름, 키, 몸무게 ... 와 같은 정보들을 가지고있음
//     기능 : 먹는다, 잔다, 공부한다 ...
// 즉, 속성과 기능으로 구분해서 표현할 수 있다.

let std1 = {
  // 중괄호안 내용이 인스턴스를 만들기 위한 실체?
  stdNo: 1234, // 값을 담는 것을 속성, 기능을 담을 수 있는 것이 method
  stdName: "홍길동",
  height: 170,
  eat: function (food) {
    //food는 매개값
    console.log(food + "을 먹는다");
  },
  sleep(hours) {
    console.log(hours + "동안 잔다.");
  },
};

// 만약 학생2를 선언하고싶으면 위와 똑같이 만들어줘야하는데,
// 불편하다 ! 그래서 class를 활용한다.

// 객체를 만들기위한 설계도(=class)
// class(설계도)를 활용하여 만들어진 객체를 '인스턴스'라 한다.
// class는 실체를 만들기위한 구조도(=설계도) /  실체를 직접만들지는 않는다.
class Student {
  // student라는 class는 객체에대한 설명들
  // 생성자
  constructor(stdNo, stdName, height) {
    this.stdNo = stdNo;
    this.stdName = stdName;
    this.height = height;
  }
  // 메소드 : 객체안에 생성되어있는 함수
  eat(food) {
    console.log(food + "를 먹는다");
  }
  sleep(hours) {
    console.log(hours + "동안 잔다");
  }
}
// 인스턴스를 만드는 방식
let std2 = new Student(1235, "김민수", 180); // 실제 인스턴스 생성
let std3 = new Student(1237, "최민식", 166);

console.log(std1.stdNo, std1.stdName);
console.log(std2.stdNo, std2.stdName);
