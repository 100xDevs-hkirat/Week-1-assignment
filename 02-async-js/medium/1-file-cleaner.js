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

const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "file.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);

  const arr = data.split(" ");
  const str = arr.filter((item) => item !== "").join(" ");
  console.log(str);
});
