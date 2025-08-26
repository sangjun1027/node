// crypto_exe,js
// import
// 내장모듈
const { reject } = require("assert");
const crypto = require("crypto"); // 암호화 방식이 다양하게 있는데 sha512를 사용하겠다. / teset1234를 암호화한 것
const { create } = require("domain");

let pass = crypto.createHash("sha512").digest("hex"); // 암호화 방식이 다양하게 있는데 sha512를 사용하겠다
// test1234 => 임의의 값 / 임의의 값을 알면 test1234값을 찾을 수도 있기에
// test1234 => (salt) 임의의값이 늘 다르게

// console.log(pass);

// salt값을 생성하는 함수
const createSalt = () => {
  return new Promise((resolve, reject) => {
    // promise가 salt값을 호출해주는 함수를 생성
    crypto.randomBytes(64, (err, buf) => {
      //비동기함수이기에 promise객체로 감쌈
      if (err) {
        // 생성하는 동안 '실패'했다는 의미
        reject(err);
      }
      // 성공! 그러면 buf로 들어감
      resolve(buf.toString("base64"));
    });
  });

  //  promise
  //    .then((result) => {
  //then method
  //      console.log(result);
  //    })
  //    .catch((err) => console.error(err)); //실패 시 catch구문
};
//  createSalt(); // 함수호출
//  salt값을 활용해서 평문 -> 암호화문으로 변경
const createCryptoPassword = async (trPw) => {
  // 함수의 매개값으로 평문, salt값이 두번째 매개값
  let salt = await createSalt();
  console.log(salt);
  salt =
    "w09OcTAZ6Q2vFsoL10ER8RwdWvR9SBl5CUp20N7nT6Nd+j1j35MPMgegxHcAmCzOVzKsdIlVa4MyKi138DTiBQ==";
  pw =
    "rHIPlxcapA6MBylTgEdf3OG7gBUKliA5jYaK5JxgxO1O9MsrCvwhC6qjN3tpkEr//joXiKQ1dm9phBxJbeXUeA==";
  crypto.pbkdf2(trPw, salt, 100000, 64, "sha512", (err, buf) => {
    if (err) {
      console.log("err=>", err);
    }
    console.log(buf.toString("base64"));
    let crPw = buf.toString("base64");
    if (pw == crPw) {
      console.log("비밀번호가 동일함");
    } else {
      console.log("비밀번호를 확인하세요");
    }
  });
  // pdkdf2:비밀번호 기반의 키 유도 함수
  // 비밀번호, 솔트(salt), 그리고 반복 횟수를 입력받아 암호화할 때 사용되는 키를 생성
};
createCryptoPassword("test1234");
