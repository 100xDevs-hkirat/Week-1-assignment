const fs = require('fs');

let content = "Harkirat Singh"

fs.writeFile("output.txt", content, 'utf8', function (e) {
    console.log(e)
})
