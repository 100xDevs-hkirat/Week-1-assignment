const fs = require("fs");

let fileInput =
  "yes, buddy i am updated. Why you came here to check? Don't you trust me !!";

fs.writeFile("content.txt", fileInput, (err) => {
  if (err) throw err;
  else {
    console.log("The file is updated with the given data");
  }
});
