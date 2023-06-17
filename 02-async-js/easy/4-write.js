const fs = require("fs");

const content = "This is the content to write in file.";

fs.writeFile("sample.txt", content, "utf8", (error) => {
  if (error) {
    console.error("Error writing to file:", error);
    return;
  }

  console.log("File write operation completed successfully.");
});

console.log("Hello");
