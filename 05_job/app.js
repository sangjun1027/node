const express = require("express");
require("dotenv").config({
  path: "./.env",
});
const nodemail = require("./nodemail");
// const process = require("process");

console.log(process.env);

const app = express();
app.use(express.urlencoded()); // x-www-form-urlencoded

//라우팅
app.get("/", (req, resp) => {
  resp.send("/");
});
app.get("/mail", (req, resp) => {
  resp.send(`<form action="mail" method="post">
      <table>
        <tr>
          <th>보내는이:</th>
          <td>
            <input type="email" name="sender" value="sangjun861027@daum.net" />
          </td>
        </tr>
        <tr>
          <th>받는이:</th>
          <td><input type="email" name="receiver" /></td>
        </tr>
        <tr>
          <th>제목:</th>
          <td><input type="text" name="subject" /></td>
        </tr>
        <tr>
          <th>내용</th>
          <td><textarea name="content"></textarea></td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <input type="submit" value="메일보내기" />
          </td>
        </tr>
      </table>
    </form>`);
});

app.post("/mail", async (req, resp) => {
  console.log(req.body);
  let data = {
    from: req.body.sender,
    to: req.body.receiver,
    subject: req.body.subject,
    html: "<div>" + req.body.content.replace(/\n/g, "<br>") + "</div>",
  }; // 규칙 : from, to, subject, text(html)
  let result = "Done";
  result = await nodemail.mailSend(data);
  resp.send("result");
});

// "excel_down" => customers 테이블의 data를 logs/customer2.xlsx로 저장
app.get("/excel_down", (req, resp) => {
  async function db_to_excel() {
    const workbook = xlsx.utils.book_new(); // workbook 생성
    let resultSet = await sql.execute("select * from customers");
    console.log(resultSet);
    // 배열 => sheet : json_to_sheet. / 구조(순서) : workbook > sheet > cell
    const firstSheet = xlsx.utils.json_to_sheet(
      resultSet, //resultSet:어떤data
      { header: ["id", "name", "email", "phone", "address"] }
    );
    // sheet를 workbook에 첨부를하고, workbook의 정보를 활용해서 excel file(customers.xlsx)생성
    xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers"); // 시트생성
    xlsx.writeFile(workbook, "./logs/customers2.xlsx"); // 엑셀파일 생성
  }
  db_to_excel();
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
