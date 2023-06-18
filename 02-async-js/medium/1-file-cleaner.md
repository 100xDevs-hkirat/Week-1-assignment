## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs');

const filePath = 'path/to/file.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const modifiedData = data.replace(/\s+/g, ' ');

  // Write the modified content back to the same file asynchronously
  fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('File content has been modified and written back successfully.');
  });
});
