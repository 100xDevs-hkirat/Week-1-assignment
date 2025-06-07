// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("node:fs");
const path = require("node:path");

const content = "I am writing some words into a file";

const filePath = path.join(__dirname, "TextFile", "file1.txt");
fs.writeFileSync(filePath, content);

// fs.writeFile("");

const writtenAsync = "This text is written asynchronously";
fs.writeFile(filePath, writtenAsync, (err) => {
  if (err) {
    console.error(err);
  }
});

let count = 0;
for (let i = 0; i < 100; i++) count++;

console.log(count);
