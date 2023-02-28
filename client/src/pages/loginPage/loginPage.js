import React, {useEffect, useState} from 'react';
import LoginForm from '../../forms/loginForm.js';
import SignupForm from '../../forms/signupForm.js';
import './loginPage.scss';


function LoginRegisterPage({ stringsUserID, socket }) {

  const [currentForm, setCurrentForm] = useState('login');


  useEffect(() => {
    if (stringsUserID) {
      window.location.replace('/chat');
    }
  });

  const ComponentMap = {
    register: {
      navBtnTarget: 'login',
      navBtnText: "Sign-In to Existing Account",
      TitleText: "Register Now",
      Form: SignupForm, 
      formProps:{ 
        socket: socket,
      },
    },
    login: {
      navBtnTarget: 'register',
      navBtnText: "Register a new account",
      TitleText: "Login",
      Form: LoginForm, 
      formProps: {
        socket: socket,
      },
    },
  };
  

  const {Form, formProps, TitleText, navBtnTarget, navBtnText } = ComponentMap[currentForm];
  return (
    <div className="container">
      <h1 className="text-center">Strings</h1>

      <div className="jumbotron">
        <div className="row header-row">
          <div className="col-xs-6 offset-xs-3">
            <h2>{TitleText}</h2>
          </div>
        </div>

        <div className="row">
          <Form {...formProps}/>
        </div>

        <div className="row actions-row">
          <div className="col-md-6 offset-md-3">

            <button
              className="btn btn-danger col-12"
              onClick={() => setCurrentForm(navBtnTarget)}>
                {navBtnText}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginRegisterPage;

