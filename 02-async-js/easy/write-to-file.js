const fs = require('fs')

const filePath = './a.txt';

const something = "hiyooooooooooo"

fs.writeFile(filePath, something, 'utf8', function(err) {
    console.log("Data written")
})

let cnt = 0;
console.log("Obi Wan Kenobi")
for(let i=0; i<100000; i++){
    cnt += 1;
}

console.log(cnt)