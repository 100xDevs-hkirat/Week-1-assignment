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
function readAndCleanFile(){
fetch("myText.txt")
  .then((res) => res.text())
  .then((text) => {
    // do something with "text"
   })
  .catch((e) => console.error(e));
  }