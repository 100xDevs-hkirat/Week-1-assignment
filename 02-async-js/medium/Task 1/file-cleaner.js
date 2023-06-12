const fs = require('fs');

fs.readFile('./read.txt', "utf-8", function (err, data) {
    let newData = "";
    let i=0;
    while(data[i] === " ")i++;
    for(i ; i < data.length; i++){
        if(data[i] === " "){
            newData += data[i];
            while(i+1< data.length && data[i+1] === " ")i++;
        }
        else{
            newData += data[i];
        }
    }
    fs.writeFile("./read.txt", newData, () => {
        console.log("Data is cleaned and written back to the same file.");
    });

})

// ----------------------------------------------------------------
// Some expensive task
// ----------------------------------------------------------------


    let
counter = 0;
// for(let i = 0; i < 10000; i++) {
//     counter++;
// }


// for(let i = 0; i < 1000000; i++) {
//     counter++;
// }


for (let i = 0; i < 100000000; i++) {
    counter++;
}
console.log(counter);
