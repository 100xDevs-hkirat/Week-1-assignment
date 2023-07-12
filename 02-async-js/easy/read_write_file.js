const fs = require('fs');




fs.readFile('./02-async-js/easy/readFile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data);
})

let content = "This is file writing method";

fs.writeFile('./02-async-js/easy/readFile.txt', content, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File writtten succesfully")
})
fs.appendFile('./02-async-js/easy/readFile.txt', content, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File writtten succesfully")
})

for (let i = 0; i < 1000000000; i++) {
    const element = 100;
}