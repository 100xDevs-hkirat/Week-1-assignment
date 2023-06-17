const fs = require("fs");

fs.readFile("/Users/akash/Desktop/myname.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const cleanContent = data.replace(/\s+/g, " ");
  console.log(cleanContent);
});
