const express = require("express");
const productRoute = require("./routes/product");
const salesRoute = require("/routes/sales");

const app = express(); // express 인스턴스 생성

// url 과 실행함수를 연결  => 라우팅
app.get("/", (req, resp) => {
  //""안의 값이 url임
  // get방식 : 이거만 치면 여기가 실행
  resp.send("/경로 호출됨.");
});

app.get("/start", (req, resp) => {
  resp.send("/start 경로 호출됨.");
});
app.get("/json", (req, resp) => {
  resp.json({ id: "user01", pw: "1111" });
});

app.post("/main", (req, resp) => {
  resp.send("/main 경로를 post요청방식으로 호출함");
});

// 서버스타트
app.listen(3000, () => {
  console.log("http://localhost:3000 서버실행");
});

app
  .route("/customer")
  .get((req, resp) => {
    resp.send("고객정보조회");
  })
  .post((req, resp) => {
    resp.send("고객정보등록");
  });

// product, sales 라우팅 정보 활용
app.use("/product", productRoute); // localhost:3000/product/루트경로
app.use("/sales", salesRoute); // localhost:3000/sales/루트경로
