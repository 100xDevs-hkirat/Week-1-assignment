const fs = require("fs");

fs.readFile("myFile.txt", "utf8", (err, data) => {
  const input = data;
  const output = input.replace(/\s+/g, " ");
  fs.writeFile("myFile.txt", output, (err) => {
    if (err) throw err;
    else {
      console.log("file has been updated");
    }
  });
});
