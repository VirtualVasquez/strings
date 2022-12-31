import React, {useEffect} from 'react';
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
            />} 
          
          />
        <Route exact path="/chat" 
          element={
            <Protected stringsUserID={stringsUserID}>
              <ChatPage 
                stringsUserID={stringsUserID}
                setStringsUserID={setStringsUserID}
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
