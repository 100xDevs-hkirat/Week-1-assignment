var fs = require('fs');

fs.readFile('./writeToFile.js', (err, content) => {
    console.log("content:", content.toString())
    fs.writeFile('./temp.js', content, (err) => {
        if (err) {
            throw err
        }
        console.log('Saved!')
    })
})

for(let i=0;i<100000;i++) {
    for(let j=0;j<100000;j++) {
        //
    }
}