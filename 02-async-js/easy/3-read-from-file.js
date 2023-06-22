const fs = require('fs')

fs.readFile('index.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('some error occures', err)
    }
    else {
        console.log(data)
    }
})

function counter(n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        count += i
    }

    console.log(count)
}

counter(10000)