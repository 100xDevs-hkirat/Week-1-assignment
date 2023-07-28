// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

import fs from "fs"

const content = "\n This is new line to add again brooo";

const writeToFile = async () =>{
    try {
       await fs.appendFile("/Users/Prathmesh Pawar/reactjs/assign1/README.md", content, (res)=>{
            console.log(res);
       });
    } catch (error) {
        console.log(error.message);
    }
}

writeToFile();
console.log("Writing to file");