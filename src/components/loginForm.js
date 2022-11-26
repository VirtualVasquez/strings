import React from 'react';

const LoginForm = () => {

    return (
          <div className="col-md-6 offset-md-3">

            <form id="signInForm">
              <div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="username" className="form-control" id="username"></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password"></input>
                </div>
              </div>


              <button type="submit" className="btn col-12 btn-primary">Submit</button>
            </form>
            
          </div>
    );
}

export default LoginForm;
