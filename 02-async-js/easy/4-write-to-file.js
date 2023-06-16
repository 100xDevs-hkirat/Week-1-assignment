const fs = require("fs/promises");

const writeToFile = async (fileName) => {
  try {
    const content = "This is written to the file by node js";
    await fs.writeFile(fileName, content);
  } catch (err) {
    console.log(err);
  }
};

writeToFile("./File.txt");
