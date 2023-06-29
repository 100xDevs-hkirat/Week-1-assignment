/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username,password, already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username,password, and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login

  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username,password, and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username,password, and password in headers are valid, or 401 Unauthorized if the username,password, and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000
const app = express()
// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server

class user {
  constructor(uid,username, password, firstName, lastName) {
    this.uid = uid
    this.username = username
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
  }
}
var users = [
  new user("101","rishi","pass","user1","lname2",),
  new user("102","rish2","pass","user1","lname2",),
  new user("103","rish3","pass","user1","lname2",),
]
function checkcredentials(username, password,fname,lname) {
  var alreadyExists
  console.log("------------>",username, password)

  for (var i = 0; i < users.length; i++) {
    console.log("------------",users[i].username, users[i].password)
    if (users[i].username === username && users[i].password === password) {
      console.log("------------",users[i].username, users[i].password)
      alreadyExists = true
    }
  }

  //  userNameFound = users.find(user => user.username === username)
  //  console.log("userNameFound",userNameFound)
  //  console.log(users.find(user => user.username === username))
}
module.exports = app
app.use(bodyParser.json())
function loginUser(req, res) {
  console.log("req.query", req.query)
  console.log("req.headers", req.headers)
  console.log("req.body", req.body)

  const username = req.body.username
  const password = req.body.password
  const fname = req.body.fname
  const lname = req.body.lname
  
  console.log("vvvvvvvvvvvvvvv")
  console.log(username,  password)
  checkcredentials(username, password,fname,lname)
  res.send("Response")
}
app.post("/signup", loginUser)
function startServer() {
  console.log("Server started at port " + PORT)
}
app.listen(PORT, startServer)
