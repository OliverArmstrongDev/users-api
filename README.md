# users-api
This is a simple Node.js API with some simple user data to be returned as JSON.

I use this API if I want some simple user data to work with.

USAGE:

https://api.oliverarmstrongdev.com/users => returns all (4) users.

https://api.oliverarmstrongdev.com/users/:id (https://api.oliverarmstrongdev.com/users/3) returns a single users' data in JSON format:

EXPECTED RESULTS FOR SINGLE USER:

{
  "id": 3,
  "name": "Austin Rivers",
  "username": "Austin89",
  "email": "austin_rivers@gmail.com",
  "phone": "0211123344"
}
