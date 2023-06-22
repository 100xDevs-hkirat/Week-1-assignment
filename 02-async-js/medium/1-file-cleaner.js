const fs = require('fs');

function cleanFile(filename) {
  try {

    const content = fs.readFileSync(filename, 'utf8');

    const cleanedContent = content.replace(/\s+/g, ' ');

    fs.writeFileSync(filename, cleanedContent);

    console.log(`File "${filename}" cleaned successfully.`);
  } catch (error) {
    console.error(`Error cleaning file "${filename}": ${error}`);
  }
}

const inputFile = 'sample.txt';
cleanFile(inputFile);