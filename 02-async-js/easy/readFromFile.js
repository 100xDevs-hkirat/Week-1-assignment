const fs = require('fs');
fs.readFile('./3-read-from-file.md', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})

function sum() {
    let ans = 0;
    for (let i = 0; i < 1000000000000; i++) {
        ans += i;
    }

    console.log(ans);
}
sum();

console.log('Hello world!');