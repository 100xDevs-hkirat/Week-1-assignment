/*
Code Author : MrDeepThought A.K.A IamArsh A.K.A Arshpreet Singh
Time : 14:00 15th June,2023
Problem : 3.Writing to a File
Description : The problem requires us to write to a file asynchronously in JS
Observation : It was obsered that the file writing was done asynchronously initiating the call immediately as followed by the JS interpreter
              but it took some time to complete the file writing and by that time the main thread prints one line and starts another async
              task which will print something on screen after 1 second and it was observed that the file writing task gets done before that.
*/

const fs = require('fs');

const path = "02-async-js/easy/4-write-to-file.txt";
const content = `This is me trying to lear Javascript.txt

I am curently learning the asynchronous concepts in the javascript using callback/settimeouts!
Extra line
`

fs.writeFile(path,content,err => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`Contents to file at path ${path} written succenfully`);
});

console.log("synchronous code in main thread!");
setTimeout(() => {
    console.log("Trying to print something asynchronusly with a delay of 1 secs to check if the file is written faster than this or not!");
}, 1000);