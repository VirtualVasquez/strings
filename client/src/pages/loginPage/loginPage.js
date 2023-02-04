import React, {useEffect, useState} from 'react';
import LoginForm from '../../forms/loginForm.js';
import SignupForm from '../../forms/signupForm.js';
import './loginPage.scss';
import axios from "axios";


const LoginPage = props => {
   
  const {stringsUserID, setStringsUserID, socket} = props;

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [providedUsername, setUsername] = useState(null);
  const [providedPassword, setPassword] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState(null);


  async function loginUser(username, password) {
    try {
      // const response = await axios.post('http://localhost:3001/api/login', {
      const response = await axios.post('api/login', {
        user_name: username,
        user_pass: password,
      });
      localStorage.setItem("strings_user_id", response.data.user_id);
      localStorage.setItem('userName', username);
      // await axios.put('http://localhost:3001/api/users/update-last-active',
      await axios.put('api/users/update-last-active',
      {
        user_id: response.data.user_id
      }
      );
      socket.emit('newUser', {username, socketID: socket.id});
      window.location.replace('/chat');
    } catch (error) {
      console.error(error);
    }
  }
  
  async function createUser(username, password, passcheck) {
    try {
      // const response = await axios.post('http://localhost:3001/api/users/update-last-active', {
      const response = await axios.post('api/users/update-last-active', {
        user_name: username,
        user_pass: password,
        pass_check: passcheck
      });
      localStorage.setItem("strings_user_id",response.data.rows[0].user_id);
      // await axios.put('http://localhost:3001/api/users/update-last-active', {
      await axios.put('api/users/update-last-active', {
        user_id: response.data.rows[0].user_id
      });
      socket.emit('newUser', {username, socketID: socket.id});
      window.location.replace('/chat');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    if(stringsUserID){
      window.location.replace('/chat');
    }
  });


    return (
      <div className="container">
        <h1 className="text-center">Strings</h1>
        
        <div className="jumbotron">

          <div className="row header-row">
            <div className="col-xs-6 offset-xs-3">
              {showCreateForm ? <h2>Create A New Account</h2> : <h2>Login To Your Account</h2>}
            </div>
          </div>

          <div className="row">
          {showCreateForm ? 
            <SignupForm 
              providedUsername={providedUsername}
              providedPassword={providedPassword}
              passwordCheck={passwordCheck}
              setUsername={setUsername}
              setPassword={setPassword}
              setPasswordCheck={setPasswordCheck}
              createUser={createUser}
              socket={socket}
            /> : 
            <LoginForm 
              setUsername={setUsername}
              providedUsername={providedUsername}
              setPassword={setPassword}
              providedPassword={providedPassword}
              loginUser={loginUser}
              stringsUserID={stringsUserID}
              setStringsUserID={setStringsUserID}
              socket={socket}
            />
          }
          </div>

          <div className="row actions-row">
            <div className="col-md-6 offset-md-3">            
                
                <button 
                className="btn btn-danger col-12"
                onClick={() => setShowCreateForm(!showCreateForm)}
                >
                  {showCreateForm ? "Sign-In to Existing Account" : "Create An Account"}
                </button>
                
            </div>
          </div>

        </div>
      </div>
    );
}

export default LoginPage;

