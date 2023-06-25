const fs = require("fs");

fs.readFile("content.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File content:", data);
});

// for(let i=0; i<1000000000; i++){}
