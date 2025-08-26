// url_exe.js
const urlInfo =
  "http://username:pass@test.example.com:8080/prod/computer/pageInfo?page=3&pcode=abc#hash"; // 실제 url은 아니고, 테스트용
const myUrl = new URL(urlInfo);

// console.log(myUrl.href); // href는 전체경로
// console.log(myUrl.origin); //origin은
// console.log(myUrl.searchParms.get("pcode"));
// console.log(myUrl.searchParms.keys()); //파라미터 key값을 알 수 있음
// console.log(myUrl.searchParms.values()); // 파라미터 values값을 알 수 있음
