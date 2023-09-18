const fs = require("node:fs/promises");

function readFromFile(filePath) {
  fs.readFile(filePath, "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  let sum = 0;

  for (let i = 0; i < 100000000000; i++) {
    sum += i;
  }
}

module.export = readFromFile;
