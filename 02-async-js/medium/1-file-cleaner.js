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

var fs = require('fs');

fs.readFile('./textFile.txt', 'utf8', (err,str)=>{
    if (err)
    {
        console.log("Error reading file. Error: " + err);
    }
    else
    {
        var replacedStr = str.replace(/\s+/g,' ');

        fs.writeFile('./textFile.txt', replacedStr, 'utf8', (err)=>{
            if (err)
            {
                console.log("Error writing to file. Error: " + err);
            }
        });
    }
})