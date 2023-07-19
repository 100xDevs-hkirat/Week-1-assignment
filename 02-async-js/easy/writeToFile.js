const fs = require('fs');

const filePath = "./file2.txt"
const data = "this is a samle text for testing purposes"

fs.writeFile(filePath, data, 'utf8', (err) => {
    if(err) {
        throw new Error("Error occured while writing into the file");
    } else {
        console.log("Writing into file successful");
    }
})

let sum = 0;
for(let i = 0; i < 100000000; i++) {
    sum += i;
}
console.log(sum);