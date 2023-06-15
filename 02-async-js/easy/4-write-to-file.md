## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

const filename = 'term.txt';
const content = 'This is the content to write to the file.';

fs.writeFile(filename, content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }

  console.log('File has been written successfully.');
});