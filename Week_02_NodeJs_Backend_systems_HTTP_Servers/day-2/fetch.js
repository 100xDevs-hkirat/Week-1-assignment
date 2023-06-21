const express = require("express")
const bodyParser = require("body-parser")
const { callbackify } = require("util")

const app = express()
const port = 1200

app.use(bodyParser.json())

function logResponseBody(jsonBody){
    console.log(jsonBody)

}
function callbackFn(result){
    result.json().then(logResponseBody)
}


var sendObj={
    "method":"POST",
    "body":JSON.stringify({
        "counter":"5"
    }),
    "headers":{
    "Content-Type": "application/json",
    }
}
fetch("http://localhost:3000/getSuminJson",sendObj).then(callbackFn)