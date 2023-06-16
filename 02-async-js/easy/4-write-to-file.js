const { writeFile } = require("fs");

writeFile("text.txt", "Hello from Write file", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("write file completed.");
});
