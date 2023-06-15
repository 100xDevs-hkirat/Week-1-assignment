const fs = require('fs');
fs.readFile('test.txt', (error, data) => {
    if(error) {
        throw new Error();
    }
    else {
        console.log(data.toString());
    }
});