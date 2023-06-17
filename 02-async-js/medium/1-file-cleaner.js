var fs = require("fs");

var filepath = "./testfile.txt";

fs.readFile(filepath, "utf8", (error, data) => {
  fs.writeFile(filepath, data.split(/\s+/).join(" "), "utf8", (_) => { });
});
