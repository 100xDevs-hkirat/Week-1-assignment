const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const words = data.split(" ").filter(Boolean);
  const cleanedContent = words.join(" ");

  fs.writeFile("text.txt", cleanedContent, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("File cleaning done.");
  });
});
