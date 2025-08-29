// app.js
// 웹 서버를 만들쟈
// index.js file에 함수를 만들어서 관련코드 담아놨음
// 현재 index.js를 export한 상태의 코드임

const express = require("express");
const parser = require("body-parser");
const sql = require("./sql"); //index파일은 굳이 안적어줘도됨
const prodSql = require("./sql/sql"); //객체 안에는 {productList:{query:''}, productDeyail:{query:''}}이 있다
const cors = require("cors");

// console.log(prodSql["imageList"].query); //query가 가지고있는 값 중에서 ...

const app = express();
app.use(parser.urlencoded()); // x-www-form-yrlencoded, / key : value형식
app.use(parser.json()); // json으로 data를 넘기겠다는 의미
app.use(cors());

// '라우팅'정보 중 최상위
app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 상품쿼리
app.post("/api/:alias", async (req, resp) => {
  let search = prodSql[req.params.alias].query;
  let param = req.body.param; //요청정보에 body에 요청정보를 넘긴다, ex)[{product_id:9, type:1, path:test.jpg}] 이런형식으로 들어감
  // param:[2]
  try {
    let result = await sql.execute(search, param); // query문을 변수'search'에 넣음 , 매개값으로 param
    resp.json(result);
  } catch (err) {
    // console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// 고객 목록 정보 보기
app.get("/customers", async (req, resp) => {
  try {
    let customerList = await sql.execute("select * from customers");
    console.log(customerList);
    resp.json(customerList);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// 새로운 data 등록
// insert는 post방식
app.post("/customer", async (req, resp) => {
  console.log(req.body.param);
  try {
    let result = await sql.execute(
      "insert into customers set ?", //
      [req.body.param]
    );
    console.log(result);
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// 삭제
// http://localhost:8080/boardList.do?page=3    / jsp할 때 ? 뒤에가 parameter
// http://localhost:3000/customers/:id    /:뒤로는 parameter
// delete라는 method가 있다
app.delete("/customer/:id", async (req, resp) => {
  console.log(req.params); // console로 확인
  try {
    let listDelete = await sql.execute("delete from customers where ?", [
      req.params,
    ]);
    console.log(listDelete);
    resp.json(listDelete);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// 수정
app.put("/customer", async (req, resp) => {
  try {
    let correction = await sql.execute(
      "update customers set name=?, email=?, phone=? where id=?",
      [req.body.name, req.body.email, req.body.phone, req.body.id]
    );
    console.log(correction);
    resp.json(correction);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
