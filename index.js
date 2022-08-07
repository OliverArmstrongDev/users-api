const express = require("express");
const app = express();
const jsonData = require('./data.json');




app.get('/', (req, res) => {
res.send("I'm working!");
})
app.get('/users', (req, res) => {
res.send(jsonData);
})
app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    const result = jsonData.filter(user => user.id.toString() === _id)
result.length ? res.json(result[0]) : res.send(`No user found with id: ${_id}`)
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
    
})