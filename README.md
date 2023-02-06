# Strings: The Chat App.

This is a application is built with the PERN stack - PostgreSQL, Express, React, Node.   
Create an account and start chatting [here](https://full-strings-chat.onrender.com/)
The app is hosted on render.com, and its database on elephantsql.com.

![search](/screenshots/login.png)

As you're using the app, you can see the other users currently active on the page that can send messages of their own. 

![search](/screenshots/chat.png)

## Installation and Setup

If you'd like to download the repo for yourself to play with, you'll need to run `npm install` in both the `client` and `server` directories.

Afterwards, you'll need to recreate and connect the databases to the applications. The code needed to do so is included in the `sqlseeds` folder, and have been numbered in the ordered in which they should be constructed.
an `env-example.txt` file is included in the `server` folder as a reference for the environment variables that are needed for the server to to connect to the database afterwards. You'll need to pass these values in a `.env` file of your own in the same folder. 

## Summary

The benefit of Javascript being so prolific and versatile is that it made it possible to create this application in primarily that language alone. However, a consequence of that is the fact that there are there many different libraries and approaches to implement desired features, and can be overwhelming to figure out which one fits best for a project, as well as how to use it.

The important take away from having worked on this project is to work methodically, as with any project. Identify the needed deliverables for the project, and address them one at a time. While it is necessary to consider how different libraries and frameworks will integrate with one another, it is also critical to understand what each piece of the puzzle in contributing to the greater whole. Being able to see the puzzle for its pieces, as well the completed work has a worth that can not be understated.

## Road Map

There are a number of features I would like to add or improve to the project to make it more robust.

- Improve the design of the application. It's rather barebones in its current state.
- Speaking of design, a more mobile-responsive design would definitely be a part of that overhaul.
- Add more channels to the application, and add the option to message individual users.
- Provide an indicator to show when a user is currently typing.
- A more accurate 'Active Users' section. Currently it shows all users that have loggedin or have typed a message in the last 15 minutes.
- Improve the performance of the application. Some axios requests are not running as optimally as would be desired. 

## Technologies Used

- Frontend
    - Axios
    - Bootstrap
    - React
    - React-Router-Dom
    - SASS
    - Socket.io-client

- Backend
    - Body-parser
    - Chai
    - Cors
    - DotEnv
    - Express.js
    - PostgreSQL
    - Socket.io

## Author

**Melvin Vasquez** - *Full-Stack Software Developer* - [Website](https://melvinvasquez.com/) | [LinkedIn](https://www.linkedin.com/in/melvin-vasquez/)