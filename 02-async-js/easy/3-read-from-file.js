const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "textFile.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

let i = 0;
while (i < 1000000000) {
  i++;
}
