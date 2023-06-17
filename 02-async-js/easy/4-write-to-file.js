const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temp.txt");

fs.writeFile(filePath, "Hey There, this is temp file", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("File is saved");
});
