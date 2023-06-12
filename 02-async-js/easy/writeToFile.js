const fs = require('fs');
const path = require('path');

const outputFilepath = path.join(__dirname, 'writeFileOutput.txt');

fs.writeFile(
    outputFilepath,
    'Write file success',
    { encoding: 'utf-8' },
    (err) => {
        if (err) console.log(`[Error]: ${err}`);
    }
);
