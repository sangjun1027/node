// "fetch가 다 끝이나면 그 다음 fetch를 시작하겠다"라는 형태의
// 비동기방식이지만, 동기방식처럼 보이게끔
// 즉 ! ↓
// fetch() ... fetch() ...
// ↑ 즉, fetch(fetch(fetch(코드...)))
// ↑ 위 코드보다
//fetch
//fetch
//fetch / 이런식의 코드가 보기 좋음
// async function() { await호출 }

async function getPost() {
  let response = await fetch("http://localhost:3000/posts");
  let data = await response.json();
  console.log(data);
  data.forEach(async (post) => {
    console.log("post번호" + post.id + "에 대한 comments list");
    let response = await fetch("http://localhost:3000/comments");
    let data = await response.json();
    data.forEach((comment) => {
      if (comment.postId == post.id) {
        console.log("    내용:" + comment.body);
      }
    });
  });
}
getPost(); //함수호출

// fetch("http://localhost:3000/posts", {})
// 1번글에 대한 data, 2번글에 대한 comments
//  .then((Response) => Response.json())
//  .then((data) => {
//    console.log(data);
//    data.forEach((post) => {
//      console.log("post번호" + post.id + "에 대한 comments list");
// post에 대한 comment
//      fetch("http://localhost:3000/comments")
//        .then((Response) => Response.json())
//        .then((data) => {
//          data.forEach((comment) => {
//            if (comment.postId == post.id) {
//              console.log("      내용: " + comment.body);
//            }
//          });
//        })
//        .catch(console.log);
// end of comments fetch
//    });
//  })
//  .catch(console.log);

// method: "put"
// body: JSON.stringify({
//  id: "3",
//  body: "first comment for postid: 2"
//  postId:2,
// header:{"content-type":application/json;charset=utf-8"}
// })
// .then((response) => response.json())
// .then((data) => {
//      console.log(data);
//  })
//  .catch(console.log);
