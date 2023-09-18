const fs = require("node:fs/promises");
const readline = require("node:readline");

function cleanFile(filePath) {
  //use readLine and streams for large files
  return fs
    .readFile(filePath, "utf-8")
    .then((contents) => {
      const trimmedContents = contents.replace(/\s+/g, " ");
      return trimmedContents;
    })
    .then((trimmedContents) => {
      fs.writeFile(filePath, trimmedContents);
    })
    .catch((err) => console.error(err));
}

module.exports = cleanFile;
