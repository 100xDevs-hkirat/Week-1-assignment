const fs = require("fs");

const contentToBeWritten = "Modified Content";

fs.appendFile("file1.txt", contentToBeWritten, (err) => {
  if (err) {
    console.log(err);
  }
});
function fileIsRead(err, content) {
  console.log(content);
}
fs.readFile("file1.txt", "utf-8", fileIsRead);
