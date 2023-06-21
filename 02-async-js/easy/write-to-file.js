const fs = require("fs");


// One Way

// function callback(err) {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('Done Writing');
// }
//
// fs.writeFile("file.txt", "Hello everyone!", "utf-8" , callback);


// Second Way

// fs.writeFile('file.txt', "Hi There", 'utf-8', (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('Done Writing');
// });


//Third Way

// fs.writeFile('file.txt', "Hi There everyone", 'utf-8', function (err) {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('Done Writing');
// });


// Fourth Way take input from user

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function write(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Done Writing');
    rl.close();
}

function userInput (data){
    fs.writeFile("file.txt", data, "utf-8", write);
}

rl.question('Enter the data to be written to the file: ', userInput);