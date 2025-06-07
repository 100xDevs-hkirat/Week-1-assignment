// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "TextFile", "file.txt");
const data = fs.readFileSync(filePath, "utf-8");
console.log(data);

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data + " Reading Async");
});

let count = 0;
for (let i = 0; i < 10000000000000; i++) count++;

console.log(count);
