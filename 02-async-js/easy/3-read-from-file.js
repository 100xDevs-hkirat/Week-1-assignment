/*
Code Author : MrDeepThought A.K.A IamArsh A.K.A Arshpreet Singh
Time : 14:00 15th June,2023
Problem : 3.Reading From  a File
Description : The problem requires us to read from the file asynchronously using the fs module and print the contents of the file
              and the second part of the problem also requires us to compute a complex function below the file-reading code to observe
              the nature of working of code in context to event loop, callstack, event queue, and Web Workers API.
Observation : As we increased the complexity of the sum computation which eventually increased the computation time on the main thread
              , I saw that the file contents are not printed before the sum computation task is not completed in all the cases even if
              the sum computation task requires more time.
Conclusion : According to my understanding of asynchronocity in JS, the main thread code is already there in the main callstack and only
             when this callstack goes empty can the callback from event queue can be pushed inside the callstack to print the file details
             and since the file content fetching task is carried out asynchronously using the fs module the content fetching task is done
             via a web working secondary thread which after it's completition returns its control/content to the event queue to put the 
             callback associated with fileprinting in the fileRead method in to the main callstack after it gets empty and when that
             happens the file printing is done.
*/

const fs = require('fs');

const path = "02-async-js/easy/3-read-from-file.md";
fs.readFile(path,'utf-8',(err,data) => {
    console.log("printing data...\n")
    if (err){
        console.log(err);
        return;
    }
    console.log(data);
});

let cnt = 1;
for(let i = 0; i < Math.pow(10,10); i++)
    cnt+=i;
console.log(`counter value is ${cnt}`);
