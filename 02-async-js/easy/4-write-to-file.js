// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const path = "./temp.txt";

const txt = "async task"
// async task
fs.writeFile(path, txt, 'utf8', (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("file writtenn")
})
setTimeout(() => {
    // sync task/
    const testReading = () => {
        const data = fs.readFileSync(path, 'utf8');
        console.log(data);
    }
    testReading()
    // sync task
    const write = fs.writeFileSync(path, "async task 2", 'utf8')
    testReading()
}, 1000);