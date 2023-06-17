const express = require('express')
const app = express()
const port = 3000

function calculateSum(counter) {
    var sum = 0;
    for (var i =0 ; i<=counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function handleFirstRequest(req, res) {
    var counter = req.query.counter;
    var calculatedSum = calculateSum(counter);

    var answer = "the sum is " + calculatedSum;
    res.send(answer);
}

function createUser(req, res) {
    res.send("hello world");
}

app.get('/handleSum', handleFirstRequest)
app.put('/createUser', createUser)

function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)

