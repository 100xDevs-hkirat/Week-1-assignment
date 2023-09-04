function fileCleaner(fileName) {
    const fs = require('fs');
    let fileData = fs.readFileSync(fileName, 'utf8');
    let cleanedFile = "";
    for (let i = 0; i < fileData.length; i++) {
        if (fileData[i] !== ' ') { cleanedFile += fileData[i]; }
        else {
            while (fileData[i] === ' ' && i < fileData.length) {
                ++i;
            }
            if (i < fileData.length) { cleanedFile = cleanedFile + ' ' + fileData[i]; }
        }
    }
    fs.writeFileSync(fileName, cleanedFile, 'utf8');
    console.log('The file has been saved!');  
}

fileCleaner(__dirname + '/test1');