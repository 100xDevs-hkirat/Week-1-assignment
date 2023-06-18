/*
Code Author : MrDeepThought A.K.A IamArsh A.K.A Arshpreet Singh
Time : 15:59 15th June,2023
Problem : File cleaner
Description : We have to strip extra spaces from the text file by reading it and then writing to the same file the filtered text.
*/
const fs = require('fs');

let filePath = "./02-async-js/medium/1-file-cleaner.txt";

fs.readFile(filePath, "utf-8", (err,data) => {
    if (err){
        console.log(err);
        return;
    }
    console.log("Reading from the file...\n");
    
    // removing extra spaces from the string using RegEx
    content = data.replace(/ +/g," ").trim();
    // console.log(content);

    fs.writeFile(filePath, content, err => {
        if (err){
            console.log(err);
            return;
        }
        console.log("Done writing to File!\n")
    });
});
