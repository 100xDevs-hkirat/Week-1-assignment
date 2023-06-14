/*
File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'temp-file.txt');

console.log('before readfile');
fs.readFile(filePath, 'utf8', (err, data) => {
    console.log(err, data);
    if (err) {
        console.log("error reading file: " + err);
        return;
    }

    const lines = data.split('\n');

    const newFileContent = lines
        .map(line => line.split(' ').filter(word => word !== '').join(' '))
        .join('\n');

    console.log('before writefile');

    fs.writeFile(filePath, newFileContent, 'utf8', (err) => {
        console.log(err, 'from write file');
    })

    console.log('after readfile');

})

console.log('after readfile');

/*
Output:

before readfile
after readfile
null hello world my name          is raman

bye   world    my name is raman

before writefile
after readfile
null from write file
*/