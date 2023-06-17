const fs = require("node:fs");

function sum(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }

  return total;
}

fs.readFile("./index.txt", (err, data) => console.log(data));

console.log(sum(10000000000), " sum of 10000");

console.log(sum(1000000), " sum 1000000");
