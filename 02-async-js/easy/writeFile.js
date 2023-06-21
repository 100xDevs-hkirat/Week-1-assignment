var fs = require("fs");

fs.writeFile("sample.txt", "Hello World", (err) => {
  if (!err) {
    console.log("write success");
  } else {
    console.log(err);
  }
});

let c = 0;
for (let i = 0; i < 100000000000; i++) {
  c += i;
}

console.log(c);
