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

let users = [];

io.on('connection', (socket) => {
    // console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('message', (data) => {
        io.emit('messageResponse', data);
    })

    //listens when a new user joins the server
    socket.on('newUser', (data) => {
        //add the new user to the list of users
        users.push(data);
        //sends the list of users to the client
        io.emit('newUserResponse', users);
    })

    socket.on('disconnect', () => {
    //   console.log('🔥: A user disconnected');
      //updates the list of users when a user disconnects from the server
      users = users. filter((user) => user.io !== socket.id);
      //Sends the list of users to the client
      io.emit('newUserResponse', users);
      socket.disconnect();
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
    message_model.createMessage(req.body).then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

//Delete a chat message 
app.delete("/api/messages", (req, res) => {
    message_model.deleteMessage(req.body).then(response => {
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

//get all active users
app.get("/api/users/active", (req, res) => {
    user_model.getActiveUsers().then(response => {
        res.status(200).send(response);
    })
})

//Get one user based on ID
app.get("/api/user/:id", (req, res) => {
    user_model.getUser(req.params.id)
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

//Delete a user
app.delete("/api/users", (req, res) => {
    user_model.deleteUser(req.body).then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

//Get a single user and login
app.post("/api/login", (req, res) => {
    user_model.login(req.body).then(response => {
        res.status(200).send(response);
        //update users last_active column
        //emit here
    })
    .catch(error => {
        res.status(500).send(error);
    })
})


app.put("/api/users/update-last-active", (req, res) => {
    user_model.updateLastActive(req.body).then(response => {
        res.status(200).send(response);
        // emit here?
        io.emit('update_user_activity', response.rows[0])
    })
    .catch(error => {
        res.status(500).send(error);
    })
})