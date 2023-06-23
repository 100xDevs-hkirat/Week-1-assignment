var fs = require("fs");

fs.writeFile("game.txt", "Welcome to my GitHub", (err) => {
  if (!err) {
    console.log("write success");
  } else {
    console.log(err);
  }
});

let a = 0;
for (let i = 0; i < 10; i++) {
  a += 1;
}

console.log(a);