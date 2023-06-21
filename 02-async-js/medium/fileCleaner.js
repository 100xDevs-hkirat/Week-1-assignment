var fs = require("fs");

let oldContent;
let newContent;
let list = [];

fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
  if (!err) {
    oldContent = data;
    console.log(`old content ${data}`);
    let l = oldContent.split(" ");
    for (let i = 0; i < l.length; i++) {
      if (l[i].length != 0) {
        list.push(l[i]);
      }
    }
    newContent = list.join(" ");
    fs.writeFile("test.txt", newContent, (err) => {
      if (!err) {
        console.log(`new content ${newContent}`);
      } else {
        console.log(err);
      }
    });
  } else {
    console.log(err);
  }
});
