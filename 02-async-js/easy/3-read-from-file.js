const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '3-read-from-file.md');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

let sum = 0;
for (let i = 1; i <= 1000000000; i++) {
    sum += i;
}
console.log(sum)

