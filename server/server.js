const express = require('express');
const app = express();
const port = 3001;

const http = require('http').createServer(app);
const{Server} = require('socket.io');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

const io = new Server(http, {cors:{origin:'http://localhost:3000'}})

io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('message', (data) => {
        console.log(data);
        io.emit('messageResponse', data);
    })

    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

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

http.listen(port, () => {
    console.log(`example app listening on port ${port}`)
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
    console.log(req.params, req.body, req.query);
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

//Get one user based on ID
app.get("/api/user/:id", (req, res) => {
    user_model.getUser(req.params.id)
    .then(response => {
        // console.log(response);
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

//Get a single user and login
app.post("/api/login", (req, res) => {
    user_model.login(req.body).then(response => {
        console.log(req.body);
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})



