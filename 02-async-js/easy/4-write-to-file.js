// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require("fs");

function readFile(content) {
  fs.writeFile("file.txt", content, "utf8", (error, data) => {
    if (error) {
      console.error("Error reading file:", error);
      return;
    }

    console.log("File content:", data);
  });

  fs.readFile("file.txt", "utf8", (error, data) => {
    if (error) {
      console.error("Error reading file:", error);
      return;
    }

    console.log("File content:", data);
  });
}

readFile("the file is written");
