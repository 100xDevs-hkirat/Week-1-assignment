## Day 2

### middleware 

1. Middleware Function:

- Function: `middleWare(req, res, next)`
- Description: This middleware function logs the value of the `counter` header from the incoming request and then calls the `next` function to pass control to the next middleware or route handler.
- Usage: Registered using `app.use(middleWare)`
- Additional Middleware: `bodyParser.json()`
  - Description: This middleware parses the request body containing JSON data and makes it available in `req.body`.
  - Usage: Registered using `app.use(bodyParser.json())` 

### Server Functions Overview

Sure! Here are brief line-by-line notes explaining the purpose of each function used in the server code you provided:

1. `calculateSum(counter)`: This function calculates the sum of numbers from 0 to the specified `counter` value and returns the result.

2. `calculateMul(multiplied)`: This function calculates the factorial of the specified `multiplied` value and returns the result.

3. `app.post("/getSuminJson", (req, res) => { ... })`: This defines an HTTP POST route with the path "/getSuminJson". It expects a JSON payload in the request body, retrieves the `counter` value from it, calculates the sum and factorial using the helper functions, creates an answer object with the results, and sends it as a JSON response.

4. `app.listen(port, () => { ... })`: This starts the server and makes it listen on the specified `port`. The callback function is executed once the server starts, and it logs a message indicating the server has started.

Note: The client code provided earlier had an incorrect endpoint (`http://localhost:3000/SuminJson`) compared to the server code (`/getSuminJson`). To ensure proper communication between the client and server, make sure the endpoint paths match in both the client and server code.
* Start the Server 
```
PS D:\Workspaces\git\100xDev-Assignments\Week_02_NodeJs_Backend_systems_HTTP_Servers> node .\day-2\body-parser.js
Server Started at  3000
{ counter: '5' }
Sum in calculateSum 10
10
{ sum: 10, mul: 24 }
```

* Start the API call processor 
```
node .\day-2\fetch.js
{ sum: 10, mul: 24 }
PS D:\Workspaces\git\100xDev-Assignments\Week_02_NodeJs_Backend_systems_HTTP_Servers>

```