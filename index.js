const express = require("express");
const app = express();

const firstRoutes = require("../100xdevs-Week-1-assignment/routes/01-js.routes");

const dotenv = require("dotenv");

dotenv.config();

// middleware provided by Express to parse incoming JSON requests
app.use(express.json());

// Routes
app.use("/api/first", firstRoutes);

const port = process.env.PORT;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
