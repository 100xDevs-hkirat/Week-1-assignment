import fs from 'fs';

let start = new Date();
let hrs = start.getHours();
let mins = start.getMinutes();
let secs = start.getSeconds();
console.log(`Time at start of the program ${hrs} : ${mins} : ${secs}`)
fs.readFile('fileToJS.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    else {
        const start = new Date();
        const hrs = start.getHours();
        const mins = start.getMinutes();
        const secs = start.getSeconds();
        console.log(`Time at file reading operation completed ${hrs} : ${mins} : ${secs}`)
        console.log(data);
    }
})

let sum = 0;
for (let i = 0; i < 10000000000; i++) {
    sum += i;
}

console.log(sum);
start = new Date();
hrs = start.getHours();
mins = start.getMinutes();
secs = start.getSeconds();
console.log(`Time at loop operation completed ${hrs} : ${mins} : ${secs}`)