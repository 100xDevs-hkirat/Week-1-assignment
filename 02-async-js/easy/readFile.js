const fs = require('fs');

fs.readFile("./file.txt", 'utf8', (err, data) => {
    if(err) {
        throw new Error("Error while reading file");
    } else {
        console.log(`Contents of file: ${data}`);
    }
});

let sum = 0;
// for(let i = 0; i < 10; i++) {
//     sum += i;
// }
// for(let i = 0; i < 10000; i++) {
//     sum += i;
// }
for(let i = 0; i < 10000000000; i++) {
    sum += i;
}
console.log(sum);