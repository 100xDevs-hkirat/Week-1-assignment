const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

function requestResponse(req, res) {
  res.send("Hello World");
}
/*
*/
function processCounter(req,res){
    
    
var counter = req.query.counter;
console.log(counter)
    res.send( "sum is "+calculateSum(counter))
}
function calculateSum(counter){
    let sum =0;
    for(var i=0;i< counter;i++){
        sum = sum +i
    }
    return sum;

}

app.get('/getSum',processCounter)

app.get("/", requestResponse);
app.listen(port, connextionWorking);
function connextionWorking() {
  console.log("Server Started on " + port);
}
function fileRead(err, data) {
  console.log(data);
}

fs.readFile("a.txt", "utf-8", fileRead);
