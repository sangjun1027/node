// fs_watch.js
const fs = require("fs"); //import
const path = require("path");
let sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", () => {
  console.log("재시작 없이 반영");
  // cache지우고 새롭게 읽어주는 것 (반드시 있어야됨)
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});
