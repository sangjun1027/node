// app.js에 이미 만들어진 code를
// 이 파일에 함수를 하나 만들어서, 그 database를 땡겨와서 담으려한다.

// sql/index.js

const mysql = require("mysql2");

// connect pool 생성
const pool = mysql.createPool({
  // 접속정보이며 option이다.
  host: "127.0.0.1",
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10, // 10개정도 pool을 만든다?
});

function execute(sql = "select * from customers", param = []) {
  // ↑여기 file의 핵심
  // execute함수

  return new Promise((resolve, reject) => {
    // promise객체는 함수를 매개값으로 받음, 즉각적으로 실행됨
    // 비동기방식을 동기방식으로 바꿔줌. 즉, 실행순서를 바꾸는 역할 -> promise 객체
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }

      connection.query(sql, param, (queryErr, results) => {
        connection.release();
        if (queryErr) {
          return reject(queryErr);
        }
        resolve(results);
      }); // end of query().
    }); // end of getConnection().
  });
} // end of execute().

module.exports = {
  // 핵심
  execute,
};
