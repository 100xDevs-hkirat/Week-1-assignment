var fs = require('fs')

fs.readFile('./temp.txt', (err, content) => {
    content = content.toString().split(" ").filter((c) => c).join(' ')
    fs.writeFile('./temp.txt', content, (err) => {
        if(err) {
            throw err
        }
        console.log("Saved!!")
    })
}) 