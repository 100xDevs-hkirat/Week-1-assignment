const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
let PORT = 3000;
let ADMINS = [{ username: "user", password: "pass" }];
let USERS = [];
let COURSES = [];

const userAuthetication = (req, res, next) => {
  const { username, password } = req.headers;
  const isUser = USERS.find(
    (a) => a.username == username && a.password == password
  );
  if (isUser) {
    next();
  } else {
    res.status(403).json({ message: "User not found" });
  }
};
const adminAuthetication = (req, res, next) => {
  // Create constants to store headers username and password from response header
  const { username, password } = req.headers;
  //search ADMINS array to search above usernames and passwords match
  const isAdmin = ADMINS.find(
    (a) => a.username == username && a.password == password
  );
  // if th result of above is false
  // return 403 error
  if (isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "User not authenticated " });
  }
};
// Create routes

app.post("/admin/signup", (req, res) => {
  res.json({ message: "Admin Registered Successfully" });
});
app.post("/admin/login", (req, res) => {
  res.json({ message: "Admin Logged in " });
});
app.post("/admin/courses", (req, res) => {});
app.put("/admin/courses/:courseId", (req, res) => {});
app.get("/admin/courses", (req, res) => {});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
