// import React, {Component} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import LoginPage from './pages/loginPage/loginPage';
// import ChatPage from './pages/chatPage/chatPage.js';
// import './App.scss';

// function App() {

  
//   return (
//     <Router>
//     <div className="app">
//       <Routes>
//         <Route exact path="/" element={<LoginPage />} />
//         <Route exact path="/chat" element={<ChatPage />} />
//       </Routes>
//     </div>
//   </Router>
//   );
// }

// export default App;

import React, {useState, useEffect} from 'react';
function App() {
  const [users, setUsers] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch('http://localhost:3001/api/users')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setUsers(data);
      });
  }
  function createUser() {
    let user_id = prompt('Enter userid');
    let user_name = prompt('Enter user name');
    let user_pass = prompt('Enter user pass');
    let created_date = prompt('Enter todays date (YYYY-MM-DD)');
    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id, user_name, user_pass, created_date}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getUsers();
      });
  }
  return (
    <div>
      {users ? users : 'There is no user data available'}
      <br />
      <button onClick={createUser}>Add user</button>
      <br />
      {/* <button onClick={deleteUser}>Delete user</button> */}
    </div>
  );
}
export default App;