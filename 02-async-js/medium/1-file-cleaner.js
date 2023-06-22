const fs = require('fs')

const filePath = 'index.txt'
fs.readFile('index.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('error', err)
    }
    else {
        console.log('successfully read')

        const proccesed = data.replace(/\s+/g, ' ');

        fs.writeFile(filePath, proccesed, 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('done')
            }
        })
    }
})