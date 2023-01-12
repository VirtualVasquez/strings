import React from 'react';
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

import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:3001');

function App() {
  const[stringsUserID, setStringsUserID] = useState(localStorage.getItem("strings_user_id"));
  
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
