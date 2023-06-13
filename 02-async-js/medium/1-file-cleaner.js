const fs = require("fs/promises");

const cleanFile = (path) => {
  fs.readFile(path, "utf-8")
    .then((data) => {
      processedData = data
        .split(" ")
        .filter((el) => el != "")
        .join(" ");
      return processedData;
    })
    .then((data) => {
      fs.writeFile(path, data, { flag: "w+" });
    })
    .catch((err) => console.log(err));
};

cleanFile("sample.txt");
