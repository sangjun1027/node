// 정규표현식 (= 정규식함수)

let reg = /world/gi;
// reg = new RegExp("World");

let str = `Hello Hi...
World!
world`;

console.log(str.replace(/World/gi, "세상!"));
// replace method : /World/(값) 을 찾아서 바꾸겠다는 '문자열' 메서드
// g 옵션 :(reg/g,"세상!") : 전체구문에서 해당되는 것을 찾아서 바꿈
// i 옵션 :(reg/gi,"세상!") : 위와 동일, 차이는 대소문자 구분없이 다 바꿈
// gim 옵션 : multi line옵션 : \n -> 줄 바꿔줌

console.log(reg.exec(str));
// test method : true/false인지 알려주는 메서드
// exec method : 위치값을 보여주는 ... 즉, indx값을 알려주는 메서드
