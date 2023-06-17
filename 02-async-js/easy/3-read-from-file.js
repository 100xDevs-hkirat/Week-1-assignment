let fs= require('fs')

fs.readFile('1-counter.md','utf-8',function(err,data){
    if (err) {
        console.error('Error reading the file:', err);
        return;
      }
      console.log('File contents:', data);
})

//expensive operation
n=10
for(i=0;i<n;i++){
    console.log("count",i)
}