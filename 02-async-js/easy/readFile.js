const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '3-read-from-file.md');

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log(`[Error]: ${err}`);
    } else {
        console.log(`[Data]: ${data}`);
    }
});

const expensiveOperation = () => {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum = sum + i;
    }
    console.log('Expensive sync operation completed\n');
};

expensiveOperation();
