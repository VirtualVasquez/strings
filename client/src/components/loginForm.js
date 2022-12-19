import React from 'react';

const LoginForm = props => {

    return (
          <div className="col-md-6 offset-md-3">

            <form id="signInForm">
              <div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input 
                    type="username" 
                    className="form-control" 
                    id="username"
                    onChange={e => props.setUsername(e.target.value)}
                  >
                  </input>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    onChange={e => props.setPassword(e.target.value)}
                  >
                  </input>
                </div>
              </div>


              <button type="submit" className="btn col-12 btn-primary">Submit</button>
            </form>
            
          </div>
    );
}

export default LoginForm;
