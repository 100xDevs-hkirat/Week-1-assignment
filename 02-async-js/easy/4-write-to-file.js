const fs = require("node:fs");

function sum(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }

  return total;
}

console.log(sum(10000000000), " sum of 10000");

const data = new Uint8Array(Buffer.from("Hello Node.js"));

fs.writeFile("./output.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved");
});

console.log(sum(10000000000), " sum of 10000");
