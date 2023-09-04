
function readFromFile(fileName) {
    const fs = require('fs');
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        console.log(data);
      });    
}

readFromFile(__dirname + '/1-counter.md');