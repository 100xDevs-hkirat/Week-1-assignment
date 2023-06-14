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

## Code

const fs = require('fs');

let data = fs.readFileSync("file.txt");
data = data.toString()
console.log(data)
data = data.replace(/\s+/g, ' ');
console.log(data)

fs.writeFile("file.txt", data , (err) => {
if (err) {
console.log(err);
}
console.log("Finished");
})
