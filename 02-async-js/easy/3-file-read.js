const fs = require("fs")

fs.readFile("./3-read-from-file.md", "utf-8", handleFile);

function handleFile(err, data){
    if (err){
        throw new Error(err);
    }

    console.log(data);
}


let sum = 0;
for (let i=1; i<10000000000; i++){
    sum += i;
}

console.log("Sum :", sum);