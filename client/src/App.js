import React, {Component} from 'react';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";
import LoginPage from './pages/loginPage/loginPage';
import ChatPage from './pages/chatPage/chatPage.js';
import Protected from "./helpers/Protected";
import './App.scss';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  console.log(isLoggedIn);
  
  
  
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route 
          exact path="/" 
          element={<LoginPage  
            setisLoggedIn={setisLoggedIn}
            isLoggedIn={isLoggedIn}
            />} 
          
          />
        <Route exact path="/chat" 
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ChatPage />
            </Protected>
          } 
         />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
