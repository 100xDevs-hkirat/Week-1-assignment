const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "textFile.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const words = data.split(" ");
    const nonEmptyWords = words.filter((c) => c.length !== 0);
    const content = nonEmptyWords.reduce(
      (prevVal, currVal) => prevVal + currVal + " ",
      ""
    );
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
