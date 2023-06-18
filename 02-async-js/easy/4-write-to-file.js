// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.a

const fs = require("fs");

let data = "I am the new content";

fs.writeFile("file.txt", data, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file has been written");
});
