const { readFile } = require("fs");

readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);

  for (let i = 0; i < 1000000000; i++) {
    console.log(i * 1000000000);
  }

  console.log("expensive operation completed");
});
