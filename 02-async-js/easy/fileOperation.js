const { error } = require("console");
const fs = require("fs");

//to read file
fs.readFile("/Users/akash/Desktop/myname.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});

//to write file

fs.writeFile(
  "/Users/akash/Desktop/myname.txt",
  "adding new line here",
  "utf8",
  (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("content addedd sucessfully");
  }
);

//to append new content in file

fs.appendFile(
  "/Users/akash/Desktop/myname.txt",
  "\n" + "second line added",
  (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("new content added");
  }
);
