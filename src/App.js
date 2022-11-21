import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { LoginPage } from './pages/loginPage/loginPage.js';
import { ChatPage } from './pages/chatPage/chatPage.js';
import './App.scss';

function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
