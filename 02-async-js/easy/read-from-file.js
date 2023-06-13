const fs = require('fs');

function readFromFile(){
    let sum = 0;
    for(let i=0;i<10000000000;i++){
        sum+=i;
    }
    console.log("Function Completed");
}

//Reading the file test.txt

const filePath = 'test.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('An error occurred while reading the file:', err);
    return;
  }
  console.log('File content:', data);
});