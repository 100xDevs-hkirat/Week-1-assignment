const fs = require('fs');

function FileRead() {
    fs.readFile('./test.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
}

function printData(params) {
    var sum = 0;
    for (let index = 0; index < 10000000; index++) {
        sum += 1;
    }
    console.log("Yes");
}

setInterval(FileRead, 1000);     
printData();