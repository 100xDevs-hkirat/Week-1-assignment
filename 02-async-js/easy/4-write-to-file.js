function writeToFile(fileName, txt) {
    const fs = require('fs');
    fs.writeFile(fileName, txt, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

writeToFile(__dirname + '/1-counter.md', 'Test1');