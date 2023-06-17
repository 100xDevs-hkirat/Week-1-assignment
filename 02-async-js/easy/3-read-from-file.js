// ## Reading the contents of a file
//
// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.
//
//

var fs = require("fs");

fs.readFile("1-counter.js", "utf8", (_, data) => {
  console.log(data);
});

for (var i = 0; i < 1000000000; i++);

console.log("done");
