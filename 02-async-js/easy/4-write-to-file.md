## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

## Code

const fs = require('fs');
let count = 0;
for (i = 0; i < 10000000; i++) {
count = count + i;
}

console.log(count)
console.log("started file")

fs.writeFile("file.txt", "Hello, asbar", (err) => {
if (err) {
console.log(err);
}
console.log("Finished");
})

count = 0;
for (i = 0; i < 10000000; i++) {
count = count + i;
}

console.log(count)
