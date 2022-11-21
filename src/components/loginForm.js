import React, { Component } from 'react';

export class LoginForm extends Component {

  render () {
    return (
      // <div className="jumbotron">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Only U Can Choose To Text</h2>
            <form id="signInForm">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="username" className="form-control" id="username" aria-describedby="usernameHelp"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" aria-describedby="passwordHelp"></input>
              </div>
              <button type="submit" className="btn col-md-12 btn-primary">Submit</button>
            </form>
          </div>
        </div>
        /* <div className="row">
          <div className="col-md-6 offset-md-3">            
            <button className="btn btn-secondary col-md-6">Continue As Guest</button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#createAccountModal" className="btn btn-danger col-md-6">Create An Account</button>
            <div className="modal fade" id="createAccountModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create Account</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <form id="signUpForm">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input type="username" className="form-control" id="username" aria-describedby="usernameHelp"></input>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" aria-describedby="passwordHelp"></input>
                    </div>
                  </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Create Account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
    );
  }
}
