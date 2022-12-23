import React, {useEffect, useState} from 'react';
import LoginForm from '../../components/loginForm.js';
import SignupForm from '../../components/signupForm.js';
import './loginPage.scss';

const LoginPage = props => {

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [providedUsername, setUsername] = useState('');
  const [providedPassword, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');


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
              setUsername={setUsername}
              setPassword={setPassword}
              setPasswordCheck={setPasswordCheck}
              setisLoggedIn={props.setisLoggedIn}
            /> : 
            <LoginForm 
              setUsername={setUsername}
              providedUsername={providedUsername}
              setPassword={setPassword}
              providedPassword={providedPassword}
              setisLoggedIn={props.setisLoggedIn}
            />
          }
          </div>

          <div className="row actions-row">
            <div className="col-md-6 offset-md-3">            
                
                <button 
                className="btn btn-secondary col-md-6 col-12"
                >
                  Continue As Guest
                </button>
                
                <button 
                className="btn btn-danger col-md-6 col-12"
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

