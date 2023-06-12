const fs = require('fs');

// Content to write to the file
const content = 'This content will be written to the file';

// Write content to a file asynchronously
fs.writeFile('temp.txt', content, 'utf8', (error) => {
  if (error) {
    console.error('Error writing to file:', error);
    return;
  }

  console.log('Content successfully written to the file.');
});

let sum = 0;
// blocks thread
for (let i = 0; i < 100000; i++) {
  sum += i;
}

console.log(sum);