const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const port = 3000;

app.use(bodyParser.json())
function calculateSum(counter) {
  let sum = 0;
  for (var i=0; i < counter; i++) {
    sum += i;
  }
  console.log("Sum in coaculateSum "+sum )
  return sum;
}

function confirmServerStarted() {
  console.log("Server Started at ", port);
}
app.listen(port, confirmServerStarted);

function processSum(req, res) {
  console.log("req.query" , req.query)
  console.log("req.headers" , req.headers)
  console.log("req.body" , req.body)
  const counter = req.body.counter;
  console.log("counter is "+ counter)
  var sum = calculateSum(counter)
  console.log(sum)
  res.send("Sum is "+sum)
}

app.post("/getSum", processSum);

function sayHello(){
  console.log("------------Hello---------")
  res.send('----------/----------------')
}
app.get('/', sayHello)
