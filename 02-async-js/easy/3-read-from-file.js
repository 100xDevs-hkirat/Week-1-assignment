const fs = require('fs');
const filePath = '3-read-from-file.md';
fs.readFile(filePath, 'utf-8', (err, data)=>{
    console.log(data);
});

let sum = 0;

for (let i = 0; i < 10000000000; i++) {
    sum += i;
}
console.log(sum)