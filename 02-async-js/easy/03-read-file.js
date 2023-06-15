const fs = require('fs');

function readAndPrintFileContent(filePath){
    fs.readFile(filePath,"utf8",(err,data)=>{
        if(err){
            console.error("error in reading file");
            return;
        }
        console.log(data);
        //calling an expensive operation
        ExpensiveOperation(10000000000);
    }); 
}

function ExpensiveOperation(num) {
    // Simulating an expensive operation that takes some time to complete
    let sum = 0;
    for(let i=0;i<num;i++){
        sum+=i;
    }
    console.log('Expensive operation complete.');
  }

readAndPrintFileContent("/Users/sshet/Desktop/100xdevs/week1/async-js/easy/random.txt");