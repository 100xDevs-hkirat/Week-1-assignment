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


code :

const fs = require('fs');

// File path
const filePath = 'path/to/file.txt';

// Read file contents
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
    return;
  }

  // Remove extra spaces
  const cleanedContent = data.replace(/\s+/g, ' ').trim();

  // Write cleaned content back to the file
  fs.writeFile(filePath, cleanedContent, 'utf8', (error) => {
    if (error) {
      console.error('Error writing file:', error);
      return;
    }

    console.log('File cleaned successfully');
  });
});
