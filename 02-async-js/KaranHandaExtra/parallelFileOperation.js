
function parallelFileOperation(){


    const fs = require("fs");
    ans =[];
    var count =0;
    function readCallback(err,data){
        if(err){
            throw err;
        }

        ans[0] = data;
        count++;
        if(count ===2){
           console.log(ans); 
        }

    }

    function writeCallback(arr){
        if(arr){
            ans[1]=0;
        }
        else{
            ans[1]=1;
        }

        count++;
        if(count ===2){
            console.log(ans); 
         }
    }

    fs.readFile('a.txt','utf-8',readCallback);
    fs.writeFile('b.txt',"Hello",'utf-8',writeCallback);


   

}


console.log(parallelFileOperation());
