const { error } = require("console");
const fs = require("fs");

fs.readFile('./sample.txt', 'utf-8', (error, data) => {
    if (error) {
        throw error;
    }

    console.log(data);
})

let output = 0;
for (let i = 0; i < 1000000000; i++) {
    output += i;
}
setTimeout(() => { console.log("hello") }, 10000);
console.log(output);
for (let i = 0; i < 1000000000; i++) {
    output += i;
}
console.log(output);
for (let i = 0; i < 1000000000; i++) {
    output += i;
}
console.log(output);