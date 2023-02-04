import React, { useEffect } from 'react';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './pages/loginPage/loginPage';
import ChatPage from './pages/chatPage/chatPage.js';
import Protected from "./helpers/Protected";
import './App.scss';

import io from 'socket.io-client';
const socket = io();

function App() {

  const[stringsUserID, setStringsUserID] = useState(localStorage.getItem("strings_user_id"));

  useEffect(() => {
    socket.on('connect', () => {
      console.log("Connected to server");
    })  
  }, [])

  return (
    <Router>
    <div className="app">
      <Routes>
        <Route 
          exact path="/" 
          element={<LoginPage  
            stringsUserID={stringsUserID}
            setStringsUserID={setStringsUserID}
            socket={socket}
            />} 
          
          />
        <Route exact path="/chat" 
          element={
            <Protected stringsUserID={stringsUserID}>
              <ChatPage 
                stringsUserID={stringsUserID}
                setStringsUserID={setStringsUserID}
                socket={socket}
              />
            </Protected>
          } 
         />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
