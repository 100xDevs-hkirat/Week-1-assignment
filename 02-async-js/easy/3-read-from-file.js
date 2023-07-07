var fs = require("fs");

fs.readFile("test.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

const start = Date.now();
while (Date.now() - start < 5000) {
  /**an expensive operation */
}
console.log("file read will start after this call");
