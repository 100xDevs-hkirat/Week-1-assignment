var fs = require('fs');

fs.readFile('./readFromFile.js', (err, content) => {
    console.log("content:", content.toString())
})

for(let i=0;i<100000;i++) {
    for(let j=0;j<100000;j++) {
        //
    }
}