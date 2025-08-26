// index2.js
const express = require("express");
const app = express(); // express 인스턴스 생성
const bodyParser = require("body-parser"); // body정보 해석처리
const multer = require("multer");
const path = require("path");
// CORS규칙(보안) 관련, '동일출처원칙'
const cors = require("cors");

app.use(bodyParser.urlencoded()); // id=u01&pw=1111
app.use(bodyParser.json()); // json문자열도 해석하겠다. / {"id":"user01", "pw":"1234"}

// multer셋업 -> multer는 함수를 세세하게 지정해줘야한다
// 이미지, 일반파일 구분해서 업로드
const storage = multer.diskStorage({
  // storage는 변수명
  destination: (req, file, cb) => {
    // 요청경로, 파일, 콜백함수
    cb(null, "uploads/file/"); // 첫 번째는 에러, 두 번째 매개값은 업로드되는 경로
  },
  filename: (req, file, cb) => {
    const originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf-8"
    ); // 한글처리
    cb(null, new Date().valueOf() + originalname); //
    // 업로드되는 파일의 날짜정보(시간포함), 원래파일이름
    // 2025-08-26-시간+홍길동.jpg / 시간값이 계속 바뀌기에 file name이 바뀐다
  },
});
const uploads = multer({
  storage: storage,
});

// 이미지 업로드
const imgStorage = multer.diskStorage({
  // storage는 변수명
  destination: (req, file, cb) => {
    // 요청경로, 파일, 콜백함수
    cb(null, "uploads/image/"); //
  },
  filename: (req, file, cb) => {
    const originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf-8"
    ); // 한글처리
    cb(null, new Date().valueOf() + originalname); //
    // 업로드되는 파일의 날짜정보(시간포함), 원래파일이름
    // 2025-08-26-시간+홍길동.jpg / 시간값이 계속 바뀌기에 file name이 바뀐다
  },
});
const imgUploads = multer({
  storage: imgStorage,

  // 파일 필터링
  fileFilter: (req, file, cb) => {
    //이미지 파일 여부 -> img/jpg ,  img/png
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("이미지 파일만 업로드 할 수 있습니다"), false);
    }
  },
});

const corsOpt = {
  origin: "http://192.168.56.1:5500", //특정domain만 지정. origin주고만 접속허용
};
//이걸 해줘야 html에서 fetch해서 json객체를 볼 수 있음
app.use(cors(corsOpt)); //옵션 안넣으면 모든 도메인에서 접근하는거 다 허용

app.get("/", (req, resp) => {
  resp.send("/요청");
});

// 요청방식 : post -> http://localhost:3000/login
app.post("/login", (req, resp) => {
  resp.send(" 요청 id : " + req.body.id + " 요청 pw : " + req.body.pw); //body에 있는걸 가져옴
});

// multi-part 요청 : http://localhost:3000/upload
app.post("/fileupload", uploads.single("filename"), (req, resp) => {
  resp.send(" 파일 업로드 성공");
});
app.post("/imgupload", imgUploads.single("image"), (req, resp) => {
  resp.send(" 이미지 업로드 성공");
});

// json 결과 반환
app.get("/bookList", (req, resp) => {
  const list = [
    { no: 1, title: "이거슨 스크립트다" },
    { no: 2, title: "웹기초" },
  ];
  resp.json(list);
});

// error일 때 예외처리. 즉, 에러처리
app.use((err, req, resp) => {
  if (err instanceof multer.MulterError) {
    //에러가 multer의 에러유형이면
    resp.status(400).send("Multer에러발생" + err); // status라는 method
  } else if (err) {
    resp.status(400), send(err);
  }
});

// 얘는 걍 서버 실행
app.listen(3000, () => {
  console.log("http://localhost:3000 서버실행");
});
