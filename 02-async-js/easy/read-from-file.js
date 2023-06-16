const fs = require('fs');

fs.readFile("input.txt", 'utf-8', function (e, x) {
    console.log(x)
})
for (let i = 0; i < 100000; i++) {
    console.log(i)
}