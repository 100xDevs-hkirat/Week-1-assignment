const fs = require("fs");
const fsPromises = require("fs/promises");

const writeToFile = (contents, mode = "a+") => {
  //   fs.writeFile("sample.txt", contents, { flag: mode }, (err) => {
  //     console.log(err);
  //   });

  fsPromises.writeFile("sample.txt", contents, { flag: mode }).catch((err) => {
    console.log(err);
  });
};

writeToFile(" promise data", "w+");
