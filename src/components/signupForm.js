import React from 'react';

const SignupForm = () => {

    return (
      <div className="col-md-6 offset-md-3">

        <form id="signUpForm">
          <div>
            <div className="mb-3">
              <label htmlFor="createUsername" className="form-label">Username</label>
              <input type="createUsername" className="form-control" id="createUsername"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="createPassword" className="form-label">Password</label>
              <input type="createPassword" className="form-control" id="createPassword"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="confirmPassword" className="form-control" id="confirmPassword"></input>
            </div>
          </div>
          <button type="submit" className="btn col-12 btn-warning">Submit</button>
        </form>
      </div>
    );
}


export default SignupForm;
