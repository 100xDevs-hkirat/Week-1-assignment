/*
Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'temp-file.txt');

fs.writeFile(filePath, 'this is data', 'utf8', (err) => {
    console.log(err, 'from write file');
})

console.log('hello');

let sum = 0;
for (let i = 0; i < 1000; i++) {
    sum += i;
}
console.log('bye');
console.log(sum);