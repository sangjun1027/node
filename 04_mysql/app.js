// app.js
// 웹 서버를 만들쟈

const express = require("express");
const mysql = require("mysql2");
const parser = require("body-parser");

// connect pool 생성
const pool = mysql.createPool({
  // 접속정보이며 option이다.
  host: "127.0.0.1",
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10,
});

const app = express();
app.use(parser.urlencoded()); // x-www-form-yrlencoded, / key : value형식
app.use(parser.json()); // json으로 data를 넘기겠다는 의미

// '라우팅'정보 중 최상위
app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 고객 목록 정보 보기
app.get("/customers", (req, resp) => {
  //  입력받기에 get방식사용 / get방식으로 url 요청
  //connection = pool.getConnection();
  pool.getConnection((err, connection) => {
    // getConnection => connection 객체 획득
    // connection정보를 잘 가져오면 connection.query를 실행, 오류가 생기면 err실행
    if (err) {
      console.log(err);
      return;
    }
    connection.query("select * from customers", (err, results) => {
      if (err) {
        console.log(err);
        resp.send("쿼리실행 중 에러가 있습니다");
        return;
      }
      console.log(results);
      //resp.send("실행완료!!!");
      resp.json(results); //json type으로 웹브라우져에 출력
      connection.release(); // 사용했던 connection을 pool쪽으로 환원
    }); // end of query().
  }); // end of getConnection().
});

// 새로운 data 등록
// insert는 post방식
app.post("/customer", (req, resp) => {
  console.log(req.body.param);
  pool.getConnection((err, connection) => {
    // getConnection => connection 객체 획득
    // connection정보를 잘 가져오면 connection.query를 실행, 오류가 생기면 err실행
    if (err) {
      console.log(err);
      return;
    }
    connection.query(
      //"insert into customers(name, email, phone) values(?,?,?)",
      "insert into customers set ?", // -> 이렇게써도 됨, ↑와 같음. 즉, 2가지 방법
      [req.body.param], // [{name:'김영웅', email:'hero@email.com', phone:'010-3030-3030' }]
      //  [req.body.name, req.body.email, req.body.phone], // 새로운 data
      (err, results) => {
        if (err) {
          console.log(err);
          resp.send("쿼리실행 중 에러가 있습니다");
          return;
        }
        console.log(results);
        //resp.send(results);
        resp.json(results); //json type으로 웹브라우져에 출력
        connection.release(); // 사용했던 connection을 pool쪽으로 환원
      }
    ); // end of query().
  }); // end of getConnection().
});

// 삭제
// http://localhost:8080/boardList.do?page=3    / jsp할 때 ? 뒤에가 parameter
// http://localhost:3000/customers/:id    /:뒤로는 parameter
// delete라는 method가 있다
app.delete("/customer/:id", (req, resp) => {
  console.log(req.params); // console로 확인

  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      return;
    }
    connection.query(
      //"insert into customers(name, email, phone) values(?,?,?)",
      "delete from customers where ?",
      [req.params],
      //  [req.body.name, req.body.email, req.body.phone], // 새로운 data
      (err, results) => {
        if (err) {
          console.log(err);
          resp.send("쿼리실행 중 에러가 있습니다");
          return;
        }
        console.log(results);
        //resp.send(results);
        resp.json(results);
        connection.release();
      }
    ); // end of query().
  }); // end of getConnection().

  resp.send("삭제완료");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
