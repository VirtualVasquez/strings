const express = require('express');
let cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

const user_model = require('./user_model.js');
const message_model = require('./message_model');


app.get("/", (req, res) => {
    res.send("Hello There!");
})

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})



//Get all messages
app.get("/api/messages", (req, res) => {
    message_model.getMessages()
    .then(response => {
        res.status(200).send(response);
    })
})

//Create a chat message 
app.post("/api/messages", (req, res) => {
    message_model.createMessage(req.body).then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

//Get all Users
app.get("/api/users", (req, res) => {
    user_model.getUsers()
    .then(response => {
        res.status(200).send(response);
    })
})

//Create a user
app.post("/api/users", (req, res) => {
    user_model.createUser(req.body).then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

//Get a single user
app.get("/api/users", (req, res) => {
    user_model.getUser(req.body).then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.listen(port, () => {
    console.log(`exapmle app listening on port ${port}`)
})
