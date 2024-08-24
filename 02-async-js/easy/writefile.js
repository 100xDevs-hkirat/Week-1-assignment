const fs = require("fs");

fs.writeFile("./text.txt", "This is the change", "utf8", (err) => {
  if (err) throw err;
  console.log("done");
});
