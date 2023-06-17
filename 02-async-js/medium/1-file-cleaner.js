const fs = require("node:fs");

const cleanifyString = (str) =>
  str
    .trim()
    .split(" ")
    .filter((char) => char !== "")
    .join(" ");

fs.readFile("./input.txt", (err, data) => {
  if (err) throw err;

  const cleanedData = cleanifyString(data.toString());
  const cleanedDataBuffer = new Uint8Array(Buffer.from(cleanedData));

  fs.writeFile("./input.txt", cleanedDataBuffer, (err) => {
    if (err) throw err;

    console.log("File is updated successfully");
  });
});
