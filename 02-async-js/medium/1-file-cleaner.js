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

const { rejects } = require("assert");
const { error } = require("console");
const fs = require("fs");
const { resolve } = require("path");

function readFiles() {
  return new Promise((resolve, rejects) => {
    fs.readFile("file.txt", "utf8", (error, data) => {
      if (error) {
        console.error(error);
        rejects(error);
        return;
      }
      resolve(data);
    });
  });
}

function writeFiles(content) {
  return new Promise((resolve, rejects) => {
    fs.writeFile("file.txt", content, "utf8", (error, data) => {
      if (error) {
        console.log("error");
        rejects(error);
        return;
      }
      console.log("file writed successfully");
      resolve(data);
    });
  });
}

function fileCleaner() {
  readFiles().then((data) => {
    if (data) {
      const outputString = data.replace(/\s+/g, " ");
      return writeFiles(outputString);
    } else {
      console.log("the file is empty");
    }
  });
}

fileCleaner();

// readFile("the file is written");
