const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware function
function middleWare(req, res, next) {
  console.log("from inside middleware " + req.headers.counter);
  next();
}

app.use(middleWare);
app.use(bodyParser.json());

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  console.log("Sum in calculateSum: " + sum);
  return sum;
}

function confirmServerStarted() {
  console.log("Server Started");
}

app.listen(port, confirmServerStarted);

function processSum(req, res) {
  console.log("req.query", req.query);
  console.log("req.headers", req.headers);
  console.log("req.body", req.body);
  
  const counter = req.body.counter;
  console.log("counter is " + counter);
  
  const sum = calculateSum(counter);
  console.log(sum);
  
  res.send("Sum is " + sum);
}

app.post("/getSum", processSum);

function sayHello(req, res) {
  console.log("------------Hello---------");
  res.send('Hello, World!');
}

app.get('/', sayHello);
