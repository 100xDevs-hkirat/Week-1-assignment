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

function clean(data) {
  data = data.replace(/\s+/g, " ").trim();
  return data;
}

fs.readFile("./text.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  data = clean(data);
  //   console.log(data);

  fs.writeFile("./text.txt", data, "utf8", (err) => {
    if (err) console.log(err);
    console.log(data);
  });
});
