const fs = require("fs/promises");
const path = require("path")

const readFile = async (fileName) => {
  try {
    const data = await fs.readFile(fileName , 'utf8');
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

readFile("a.txt");