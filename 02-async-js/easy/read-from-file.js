const fs = require('fs');

function callback(err,data) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
}

fs.readFile('file.txt','utf-8', callback);

let counter = 0;
for (let i = 0; i < 1000000000; i++) {
    counter += 1;
}