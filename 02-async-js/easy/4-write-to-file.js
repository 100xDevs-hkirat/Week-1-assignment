let fs= require('fs')

fs.writeFile('test.txt','HELLO FILE !!!!!!',function(err){
    if (err) {
        console.error('Error reading the file:', err);
        return;
      }
})

//expensive operation
n=1000
for(i=0;i<n;i++){
    console.log("count",i)
}