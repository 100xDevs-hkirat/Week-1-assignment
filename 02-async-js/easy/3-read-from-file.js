const fs = require("fs/promises");

const readFile = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, "utf8");
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

readFile("./3-read-from-file.md");
