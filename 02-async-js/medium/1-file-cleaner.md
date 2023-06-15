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
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function removeExtraSpacesFromFile(filename) {
  try {
    const data = await readFile(filename, 'utf8');
    const formattedData = data.replace(/\s+/g, ' ');

    await writeFile(filename, formattedData, 'utf8');
    console.log('File contents have been updated successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

const filename = 'example.txt';
removeExtraSpacesFromFile(filename);

