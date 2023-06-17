const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "1-counter.js");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    return console.log("Failed to read file", err);
  }
  console.log("Successfully read the file", data);
});
