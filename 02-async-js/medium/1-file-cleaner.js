const fs = require("fs");

const spaceClean = (str) => {
    const words = str.split(" ");
    let dummyString = "";
    for(let w of words) {
        if(w == "" || w == " ") {
            continue;
        }
        dummyString += w + " ";
    }
    return dummyString;
}

const writeCallback = (err) => {
    if(err) {
        console.error(err)
    }
    console.log("Finishing the task :)")
}

const readCallBack = (err, data) => {
    if(!err) {
        console.log(`Data from the file :\n ${data}`);
        const updatedString = spaceClean(data);
        fs.writeFile("./1-file.txt", updatedString, writeCallback);
    }
}

const cleanUp = () => {
    console.log("Reading the file :)");
    fs.readFile("./1-file.txt", "utf-8", readCallBack)
}

// spaceClean("Hey there    how are   ya?");
cleanUp()