// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
var fs=require('fs');
fs.readFile('text1.txt','utf8',(err,data)=>{
    if(err)throw err;
   const newdata= data.replace(/\s+/g,' ');
    fs.writeFile('text1.txt',newdata,'utf8',(err)=>{
        if(err)throw err;
        console.log("file is being corrected");
    })
})