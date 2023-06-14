// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function readFile() {
  fs.readFile("file.txt", "utf8", (error, data) => {
    if (error) {
      console.error("Error reading file:", error);
      return;
    }

    console.log("File content:", data);
  });
  let count = 0;
  for (let i = 0; i < 100000000; i++) {
    count = count + i;
  }
  console.log(count);
}

readFile();
