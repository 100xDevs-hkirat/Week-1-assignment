const fs = require("fs");

fs.writeFile("4-write-to-file.txt", "My name is knan....", (data) => {
  if (data) {
    console.log("Erroor............", data);
  } else {
    console.log("Success............");
  }
});
