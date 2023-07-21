const fs = require('fs');

function asyncReadFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

function expensiveTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Big task complete!');
            resolve();
        }, 5000);
    });
}

const filename = 'path/file.txt';

asyncReadFile(filename).then((data) => {
    console.log(`Content: ${data}`);
}).then(expensiveTask).then(() => {
    console.log("All tasks finished!");
}).catch(err => {
    console.log(`Error: ${err}`);
})

