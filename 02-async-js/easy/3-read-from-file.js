const fs = require("fs");
const fsPromises = require("fs/promises");

fs.readFile("sample.txt", "utf-8", (err, data) => {
  console.log("readed from file:   ", data);
}); // using callbacks

fsPromises.readFile("sample.txt", "utf-8").then((data) => {
  console.log("promises data: ", data);
}); // using promises

let tot = 0;
for (let i = 0; i < 100000000; i++) {
  tot += i;
}
console.log(tot);
