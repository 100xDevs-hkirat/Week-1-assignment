const fs=require('fs')

console.log('Start')

fs.readFile("file.txt", 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading file:', error);
      return;
    }
        console.log('File content:', data);
});

let sum=0;
for(let i=0;i<10000;i++){
    sum+=1
}
console.log("sum is ",sum)