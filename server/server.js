const express = require('express');
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello There!");
})


//Get all messages
app.get("/api/messages", (req, res) => {
    res.send("Get all Messages");
})

//Create a chat message all messages
app.post("/api/messages", (req, res) => {
    res.send("Create a chat message all messages");
})

//Get all Users
app.get("/api/users", (req, res) => {
    res.send("Get all users");
})

//Create a user
app.get("/api/messages", (req, res) => {
    res.send("Create a user")
})

//Get a single user
app.get("/api/messages", (req, res) => {
    res.send("Get a single user")
})

app.listen(port, () => {
    console.log(`exapmle app listening on port ${port}`)
})
