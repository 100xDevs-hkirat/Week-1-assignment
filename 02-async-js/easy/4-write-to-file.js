const fs = require('fs');
const path = require('path');


let filePath = path.join(__dirname, 'hello.txt')


let content = " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malor"

fs.appendFile(filePath, content, (err) => {
    if (err) throw err;
    console.log("filed saved")

})

let sum = 0;
for (let i = 1; i <= 1000000000; i++) {
    sum += i;
}


