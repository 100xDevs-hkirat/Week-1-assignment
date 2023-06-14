const fs=require('fs')

console.log('Start')

fs.writeFile("newFile.txt", "cool",'utf8', (error, data) => {
    if (error) {
      console.error('Error reading file:', error);
      return;
    }
    console.log("Write operation is successful")
});

let sum=0;
for(let i=0;i<10000;i++){
    sum+=1
}
console.log("sum is ",sum)