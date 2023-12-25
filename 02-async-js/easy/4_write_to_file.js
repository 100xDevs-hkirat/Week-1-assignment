/*## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.*/

const fs = require('fs');

// Specify the file path
const filePath = 'randomtext.txt';

// Content to be written to the file
const contentToWrite = 'Hello, this is the content to be written to the file!';

// Write content to the file asynchronously
fs.writeFile(filePath, contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }

  console.log('Content has been written to the file successfully!');
});
