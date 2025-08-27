// excel.js
const xlsx = require("xlsx");
const sql = require("./sql");

// db 조회 후 => excel 파일
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
  xlsx.writeFile(workbook, "./logs/customers.xlsx"); // 엑셀파일 생성
}
db_to_excel();

console.log("파일저장완료");

function excel_to_db() {
  const workbook = xlsx.readFile("./logs/write2.xlsx"); //readFile -> metrhod
  // console.log(workbook.SheetNames[0]); // 배열이다. [0]은 엑셀시트 이름
  const firstSheetName = workbook.SheetNames[0]; // firstSheetName은 엑셀시트 이름
  const firstSheet = workbook.Sheets[firstSheetName]; // 엑셀시트 하나 가져옴

  let jsonSheet = xlsx.utils.sheet_to_json(firstSheet); // 엑셀시트를 열어서 json형태로 만들어주는 함수
  console.log(jsonSheet);
  jsonSheet.forEach(async (customer) => {
    let result = await sql.execute("insert into customers set ?", customer);
    console.log(result);
  });
}
