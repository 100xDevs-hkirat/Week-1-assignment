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

fs.readFile('temp.txt', 'utf8', (err, data) => {
    console.log('Current Data - ', data);
    if (err) {
        console.log("error reading file: " + err);
        return;
    }

    const cleanedContent = removeExtraSpaces(data);

    fs.writeFile('temp.txt', cleanedContent, 'utf8', (err) => {
      if (err) {
        console.log("error reading file: " + err);
        return;
      }

      console.log('Data cleaned successfully');
    })

})

// can use inbuilt js methods to shorten this
function removeExtraSpaces(content) {
  let cleanedContent = '';
  let isSpace = false;

  for (let i = 0; i < content.length; i++) {
    if (content[i] !== ' ') {
      cleanedContent += content[i];
      isSpace = false;
    } else {
      if (!isSpace) {
        cleanedContent += ' ';
        isSpace = true;
      }
    }
  }

  return cleanedContent;
}