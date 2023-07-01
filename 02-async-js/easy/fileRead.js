const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File content:", data);
});

//complex opertaion

let sum = 0;
for (let i = 0; i < 10000000000000; i++) {
  sum++;
}
console.log(sum);
