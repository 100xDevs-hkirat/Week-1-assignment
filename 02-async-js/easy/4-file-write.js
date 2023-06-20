const fs = require("fs");

fs.appendFile("./4-write-to-file.md", "\n\n## Hello Universe", "utf-8", (err) => {
    if (err){
        console.log(err);
    }
})


let sum = 0;
for (let i=1; i<10000000000; i++){
    sum += i;
}

console.log("Sum :", sum);