fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((Response) => Response.json())
  .then((result) => {
    console.log(result);
    // code here
    // 댓글번호 : 123
    // 댓글번호 : 117
    result
      .filter((elem, idx, ary) => {
        if (elem.replyer == "user03") {
          return true;
        }
      })
      .forEach((elem) => {
        console.log("댓글번호 : " + elem.replyNo);
      });
  })
  .catch(console.log());

// 실습예제2) 댓글에 '연습'이라는 구문이 포함되어있는 글 번호를 출력하라
// index of 활용
// '글등록연습'.indexOf('연습') => -1반환 => 없음
fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((Response) => Response.json())
  .then((result) => {
    console.log(result);
    result
      .filter((elem, idx, ary) => {
        if (elem.reply.indexOf("연습") == -1) {
          return true;
        }
      })
      .forEach((elem) => {
        console.log("댓글번호 : " + elem.replyNo);
      });
  })
  .catch(console.log());

// map (mapping)
// A - A'
// {name, age, point} => {name,point} 같은 개념
// 실습예제2) MOCK_DATA에 있는 firstName과 LsatName을 Name으로 합치고싶다!
