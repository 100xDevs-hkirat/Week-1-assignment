const fs = require("fs");

// const data = "Hello, world!\n";
// fs.writeFile("file.txt", data, (error) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     console.log("Wrote the file.txt");
// });

const data = "Hello, again!\n";
fs.appendFile("file.txt", data, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("The file was updated!");
});
