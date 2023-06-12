const fs = require('fs');


// ----------------------------------------------------------------
//Synchronous file reading
// ----------------------------------------------------------------


try {
    const data = fs.readFileSync('./read.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}


// ----------------------------------------------------------------
//Asynchronous file reading
// ----------------------------------------------------------------
fs.readFile('./read.txt', "utf-8", function (err, data) {
    console.log(data);
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
