const fs = require('fs');


const textToWrite = "Manzil ko bhula kar jiya toh kya jiya,\nManzil ko bhula kar jiya toh kya jiya,\n.\n.\n.\n.\n"
;
// ----------------------------------------------------------------
//Synchronous file reading
// ----------------------------------------------------------------


try {
    fs.writeFileSync('./write.txt', textToWrite);
    console.log("Text is written to file.");

} catch (err) {
    console.error(err);
}


// ----------------------------------------------------------------
// Asynchronous file reading
// ----------------------------------------------------------------
fs.writeFile('./write.txt', textToWrite, function () {
    console.log("Text is written to file.");
})

fs.appendFile('./write.txt', textToWrite, function () {
    console.log("Text is appended to file.");
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
