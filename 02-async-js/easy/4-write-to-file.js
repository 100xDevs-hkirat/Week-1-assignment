const fs = require('fs');
const filePath = '4-write-to-file.md';
const dataToWrite = 'blah blah';
fs.appendFile(filePath, dataToWrite, 'utf-8', ()=>{});

