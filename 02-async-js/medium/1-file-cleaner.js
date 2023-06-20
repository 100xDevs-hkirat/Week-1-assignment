const fs = require("fs");

function cleanFile(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      throw new Error(err);
    }

    let cleanText = "";
    const n = data.length - 1;
    for (let i = 0; i < n; i++) {
      let curr = data[i];

      if (curr != " ") {
        cleanText += curr;
      }

      if (curr != " " && data[i + 1] == " ") {
        cleanText += " ";
      }
    }

    if (data[n] != " ") {
      cleanText += data[n];
    }

    // writing cleaned text back to the file
    fs.writeFile(path, cleanText, "utf-8", (err) => {
        if (err){
            throw new Error(err);
        }
    });
  });
}


cleanFile("./1-example.txt");