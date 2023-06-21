var fs = require("fs");

fs.readFile("sample.txt", { encoding: "utf-8" }, (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});

let c = 0;

for (let a = 0; a < 10000000000; a++) {
  c += a;
}

console.log(c);
