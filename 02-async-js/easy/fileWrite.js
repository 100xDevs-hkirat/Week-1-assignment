const fs = require("fs");

let contentToAdd = "\nThis is to be added to file";

fs.appendFile("file.txt", contentToAdd, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been updated successfully!");
});

let sum = 0;
for (let i = 0; i < 100000000; i++) {
  sum++;
}
console.log(sum);
