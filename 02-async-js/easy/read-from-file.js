const fs = require('fs');

// Specify the file path you want to read
const filePath = 'a.txt';

// Read the file contents asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  
  console.log('File contents:');
  console.log(data);
});

let sum = 0;

for(let i=0;i<100000000000000;i++){
    sum += i;
}

console.log(sum);