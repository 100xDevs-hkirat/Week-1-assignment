const fs = require("fs");

let fileContents;
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  fileContents = data;
  fileContents = fileContents.trim();
  fileContents = fileContents.replace(/\s+/g, " ");

  fs.writeFile("file.txt", fileContents, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been updated successfully!");
  });
});
