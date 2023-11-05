  1. POST /signup - User Signup
  Create a post request 
  Read username, password, FirstName,lastName 
    * generate unique userId
  Response Success - 201
  Response User Exists - 400


  2. POST /login - User Login
  JSON request should have username and password 
  Response Code 200 password Match 
          * Code 401 Error 


  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404
