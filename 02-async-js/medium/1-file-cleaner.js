const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'hello.txt')

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    let text = data.split(" ").filter(s => s.length > 0).join(" ")
    fs.writeFile(filePath, text, (err) => {
        if (err) throw err;
        console.log('file updated')
    })
})





