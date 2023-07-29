const fs = require("fs");


const read = (_) => {
    console.log("Reading the file");
    fs.readFile("./3-read-from-file.md", "utf-8", (err, data) => {
        if(!err) {
            console.log(data);
        }
    })
}

const expensiveOps = (n) => {
    let sum = 0;
    for(let i=0; i<=n; i++) {
        sum += i;
    }
    console.log(`from expensive operations \n ${sum}`);
}

read();
expensiveOps(1000000000);