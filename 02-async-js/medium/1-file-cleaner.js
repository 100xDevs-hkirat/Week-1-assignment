// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function removeSpace(data) {
  let result = data.split(" ");
  console.log(result);
  let arr = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i] == 0) {
    } else {
      arr.push(result[i]);
    }
  }
  let stringAns = arr.join(" ");
  console.log(stringAns);
  return stringAns;
}

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  let dataTwo = removeSpace(data);

  fs.writeFile("file.txt", dataTwo, (err, data) => {
    console.log("File is written");
  });
});
