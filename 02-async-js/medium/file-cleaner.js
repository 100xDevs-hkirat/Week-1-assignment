const fs = require("fs");

const file = fs.readFile("./a.txt", "utf-8", function (err, data) {
  let str = data;
  str = str
    .split(" ")
    .filter((c) => c !== "")
    .join(" ");
  fs.writeFile("./a.txt", str, (err) => {
    if (err) {
      console.log("error reading files", err);
    }
    console.log("File successfully publised");
  });
});
