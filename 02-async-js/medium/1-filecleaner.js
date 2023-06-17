const fs = require("fs");

let newData = "";

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File contents:");
  console.log(data);
  newData = data.replace(/\s+/g, " ").trim();
  console.log(newData);

  fs.writeFile("sample.txt", newData, "utf-8", (error) => {
    if (error) {
      console.error("Error writing to file:", error);
      return;
    }

    console.log("File write operation completed successfully.");
  });
});

console.log("HEllo");
