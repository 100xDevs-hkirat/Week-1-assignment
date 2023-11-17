// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require ('fs')


function writeCallback(err)
{// meant for handling errors
  if(err) { console.log("handling error"+ err) }
}

  fs.writeFile('12.txt', 'aditya Goswami', 'utf8',writeCallback)
 

// heavy synchronous task

let counter = 0;
for(let i=0;i<10000;i++)
{
    counter++;
}
console.log(counter)