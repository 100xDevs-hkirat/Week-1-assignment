const fs = require("fs");

function fileIsRead(err, content) {
  console.log(content);
}
fs.readFile("file.txt", "utf-8", fileIsRead);
let sum = 0;
for (let i = 0; i < 1000; i++) {
  sum += i;
}

console.log(sum);
