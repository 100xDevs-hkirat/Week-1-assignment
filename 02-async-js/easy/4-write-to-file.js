var fs = require("fs");
var data = "data you want to write to a file";

fs.writeFile("output.txt", data, function (err) {
  if (err) throw err;
  console.log("wrote to a file");
});
