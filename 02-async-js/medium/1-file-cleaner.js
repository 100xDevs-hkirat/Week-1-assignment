const { read } = require("fs");
const fs = require("fs/promises");

const readFromFileAndClean = async (fileName) => {
  try {
    let data = await fs.readFile(fileName, "utf8");
    data = data.trim();
    return data.split(" ").filter((d) => d !== " ");
  } catch (err) {
    console.log(err);
    return "";
  }
};

const writeToFile = async (fileName, content) => {
  try {
    content = content.filter((c) => c.length !== 0);
    content = content.join(" ");
    console.log(content);
    await fs.writeFile(fileName, content);
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  const data = await readFromFileAndClean("./extraSpace.txt");
  console.log(data);

  writeToFile("./extraSpace.txt", data);
})();
