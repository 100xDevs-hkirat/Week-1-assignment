const fs = require('fs');

function asyncReadFile() {
    fs.readFile('file.txt', 'utf-8', (err, content) => {
        console.log(content);
    });
}

function doComplexTask(n) {
    let counter = 0;

    for (let i = 0; i <= n; i++) {
        counter += i;
    }

    return counter;
}