// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

function writeFile(content, filePath) {
  fs.writeFile(filePath, content, 'utf8', (error) => {
    if (error) {
      console.error(error);
      return;
    }
    
    console.log('File has been written successfully.');
  });
}

// Usage
const filePath = 'path/to/your/file.txt';
const content = 'This is the content to be written to the file.';
writeFile(content, filePath);
