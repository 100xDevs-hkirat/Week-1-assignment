const fs = require("fs");

fs.readFile("file.txt", "utf8", callBack);

function callBack(err, content) {
  let result = "";
  for (let i = 0; i < content.length; i++) {
    if (content[i] === " " && result[result.length - 1] === " ") {
      continue;
    } else {
      result += content[i];
    }
  }
  fs.writeFile("file.txt", result, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function printContent(err, content) {
  console.log(content);
}

fs.readFile("file.txt", "utf-8", printContent);
