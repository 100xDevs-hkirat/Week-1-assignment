const fs = require('fs');

function callbackFn(err, data) {
    console.log(data);
}

fs.readFile('3-read-from-file.md', 'utf-8', callbackFn);

for (let i = 0; i < 10000000000; i++) {
    
}