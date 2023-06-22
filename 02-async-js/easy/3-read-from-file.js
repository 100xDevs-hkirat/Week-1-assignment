var fs = require("fs");

// fs.writeFileSync("read.txt","welcome to my github");

fs.readFile("sample.txt", { encoding: "utf-8" }, (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});

let c = 0;

for (let a = 0; a < 10000000000; a++) {
  c += 1;
}

console.log(c);