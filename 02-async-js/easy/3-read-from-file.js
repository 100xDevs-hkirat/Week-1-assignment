// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


// Module required to accept user
// input from console
import fs from "fs"

const readFromFile = async ()=> {
    await fs.readFile("/Users/Prathmesh Pawar/reactjs/assign1/README.md", "utf8", function (error, data) {
       if(error)
       {
           console.log(error.message);
       }
   
       console.log(data);
   })
}

readFromFile();
console.log("Reading from file \n");  // this executed before above function
// as readFromFile() is taking time, javascript asynchronously moves further and runs next part while
// expensive function is still running