const fs = require("fs");

const stream = fs.createReadStream("file.txt", "utf-8");
stream.on("data", (chunk) => {
  chunk = chunk.replace(/\s{2,}/g, " ");
  fs.appendFile("new_file.txt", chunk, (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Rewriting done in to a new_file.txt after removing extra spaces.");
  });
});

stream.on("end", () => {
  console.log("Done reading file.txt");
});

stream.on("error", (error) => {
  console.error(error);
});
