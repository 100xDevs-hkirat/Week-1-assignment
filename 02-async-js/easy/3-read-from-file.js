const fs = require("fs");

fs.readFile("3-read-from-file.md", "utf-8", (err, data) => {
  console.log(data);

  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
});

for (let i = 0; i < 10000; i++) {
  console.clear();
  console.log(i);
}
