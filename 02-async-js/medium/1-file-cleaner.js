// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
const path = "02-async-js/medium/text.txt";

function readFileHandler(err, data) {
  if (err) {
    console.log("Unable to read file", err);
    return;
  }
  const result = data
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");
  writeToFile(result);
}

function writeToFile(data) {
  fs.writeFile(path, data, () => console.log("write to file completed"));
}

fs.readFile(path, "utf-8", readFileHandler);
