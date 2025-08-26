// 상품관련 라우팅
const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
  //
  console.log("/상품의 root 경로");
  resp.send("/판매의root경로");
});
router.post("/insert", (req, resp) => {
  console.log("/insert 경로");
  resp.send("/insertroot경로");
});

module.express = router;
