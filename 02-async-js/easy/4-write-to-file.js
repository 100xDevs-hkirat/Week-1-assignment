// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const path = "02-async-js/easy/text.txt";

function writeSucess() {
  fs.readFile(path, "utf-8", (err, data) => {
    console.log(data);
  });
}
fs.writeFile(path, "Data Updated", writeSucess);

console.log("stared");
let sum1 = 0;
for (let i = 0; i < 100000000000; i++) {
  sum1 += i;
}
console.log(sum1);
