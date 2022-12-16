import React, {Component} from 'react';
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

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(null);
    const logIn = () => {
        setisLoggedIn(true);
      };
      const logOut = () => {
        setisLoggedIn(false);
      };
  
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
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
