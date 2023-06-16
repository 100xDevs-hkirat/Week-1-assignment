const fs = require('fs')

const add = "Here is some text to be added to the end of the file"

fs.appendFile('./4-write-to-file.md', add, 'utf8', (err) => {
    if (err) {
        console.error(err)
    }

    console.log("Written to file")
})

console.log("Hello world!")