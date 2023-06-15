const fs = require('fs')

const filePath = './a.txt';

fs.readFile(filePath, 'utf8', function(err, data) {
    console.log(data)
})

let cnt = 0;
console.log("Obi Wan Kenobi")
for(let i=0; i<100000; i++){
    cnt += 1;
}

console.log(cnt)