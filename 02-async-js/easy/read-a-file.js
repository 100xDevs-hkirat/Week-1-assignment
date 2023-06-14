const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);

    function expensiveOperation(num) {
        for (let i = 0; i < num; i++) {
            console.log('printing');
        }
    }
    expensiveOperation(data);
});