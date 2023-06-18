const fs = require('fs');


function clean(text){

    const splitArray = text.split(' ');
    const cleanedTextArray = [];
    console.log(splitArray);
    for(let i=0; i<splitArray.length; i++){
        if(splitArray[i].length !== 0){
            cleanedTextArray.push(splitArray[i]);
        }
    }
    let cleanedTextString = cleanedTextArray.join(" ");
    console.log(cleanedTextString);
    return cleanedTextString;

}

function fileRead(err, data){
    if(err){
        console.log(err);
    }
    
    fs.writeFile('textfile.txt',clean(data),(message)=>{
        console.log('done');
    });
}

fs.readFile('textfile.txt', 'utf-8', fileRead);