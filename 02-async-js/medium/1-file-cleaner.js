var fs = require("fs");

var readFilePromise = new Promise((resolve, reject) => {
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    resolve(data.split("  ").join(" "));
  });
});

const data = await readFilePromise;

fs.writeFile("test.txt", data, (err) => {
  if (err) return console.err(err);
  console.log("data is cleaned and written to the file");
});
