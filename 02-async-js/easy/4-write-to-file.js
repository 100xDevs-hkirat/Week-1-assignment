
const fs = require('fs')

const contentToAppend = "This is the content to write to file."

fs.appendFile('./4-write-to-file.md', contentToAppend , 'utf8' , (err) => {
    if(err) {
        console.error('Error Writing to file:' , err)
    }

    console.log("Content has been written to the file successfully.")
})
