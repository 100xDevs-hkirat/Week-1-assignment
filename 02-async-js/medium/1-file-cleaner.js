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

import fs from "fs"
function readGivenFile(path)
{
    return new Promise((resolve, reject)=>{
        fs.readFile(path, 'utf8', (error, data) => {
            if(error){
                reject(error);
            }
            else{
                resolve(data);
            }
        });
    })
}

function UpdateFile(path, data)
{
    return new Promise((resolve, reject)=>{
        fs.writeFile(path, data, (error, res)=>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(res);
                }
        })
    })
}


const path = "/Users/Prathmesh Pawar/reactjs/assign1/02-async-js/medium/tempFile.txt";

readGivenFile(path).then((data)=> {
    data = data.replace(/\s+/g, ' ').trim();
    UpdateFile(path, data).then(()=>{
        console.log("File cleaning successfull!");
    })
});