// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const path = "./temp.txt";
const fs = require("fs");
fs.readFile(path, 'utf8', (err, data) => {
    if (err){
        console.log(err)
        return;
    }
    console.log(data)
})

try{
    const data = fs.readFileSync(path, 'utf8')
    console.log(data)
}catch(error){
    console.error(error)
}
