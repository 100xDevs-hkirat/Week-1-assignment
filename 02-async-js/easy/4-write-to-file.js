const fs = require("node:fs/promises");

function writeToFile(path, data) {
  return fs
    .writeFile(path, data, { flag: "a" })
    .catch((err) => console.error(err));
}

module.export = writeToFile;
