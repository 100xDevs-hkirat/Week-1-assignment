## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

program :

const fs = require('fs');

// File path
const filePath = 'path/to/file.txt';

// Contents to write
const contents = 'Hello, World!';

// Write file contents asynchronously
fs.writeFile(filePath, contents, 'utf8', (error) => {
  if (error) {
    console.error('Error writing file:', error);
    return;
  }

  console.log('File written successfully');
});
