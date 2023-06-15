const fs = require('fs');

fs.writeFile('test.txt', "Hello, This is Sakib. Nice to meet you!", error => {
    if(error) {
        throw new Error();
    }
});