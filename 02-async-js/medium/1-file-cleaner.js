const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "tempFile.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    return console.log("Error while reading file data", err);
  }

  const dataToWrite = data.replace(/\s\s+/g, " ");
  console.log("I am cleaned data", dataToWrite);
  return fs.writeFile(filePath, dataToWrite, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("File is saved");
  });
});
