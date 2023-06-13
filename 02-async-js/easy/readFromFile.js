const fs = require('fs');

function Operation() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log('operation completed');
}

// Read file contents and perform an expensive operation
fs.readFile('test.txt', (error, data) => {
    if (error) {
      console.error('Error: ', error);
    } else {
      console.log('File: ', data.toString());
      Operation();
    }
  });
