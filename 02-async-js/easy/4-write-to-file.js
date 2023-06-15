const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "textFile.txt");

const data = "Sample data to be written to the file";

fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.log(err);
  }
});
