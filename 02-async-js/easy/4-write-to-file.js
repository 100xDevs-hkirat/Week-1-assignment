const fs = require('fs');

function callbackFn(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Write successful!')
    }
}

let contentsToBeWritten = 'HELLO'

fs.writeFile('a.txt', contentsToBeWritten, callbackFn);