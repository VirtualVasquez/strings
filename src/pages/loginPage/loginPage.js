import React, { Component } from 'react';
import { LoginForm } from '../../components/loginForm.js';
import { SignupForm } from '../../components/signupForm.js';

export class LoginPage extends Component {

  render () {
    return (
      <div className="container">
        <h1 className="text-center">uText</h1>
        <div className="jumbotron">
          <LoginForm />
          <div className="row">
            <div className="col-md-6 offset-md-3">            
              <button className="btn btn-secondary col-md-6">Continue As Guest</button>
              <button type="button" data-bs-toggle="modal" data-bs-target="#createAccountModal" className="btn btn-danger col-md-6">Create An Account</button>
            </div>
          </div>
          <SignupForm/>
        </div>
      </div>
    );
  }
}
