import React, {useEffect, useState} from 'react';

const SignupForm = props => {
  const {providedUsername, providedPassword, passwordCheck, setUsername, setPassword, setPasswordCheck, createUser} = props
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if(!providedUsername){
      setErrorMessage('Please provide a username');
      return;
    }
    if(providedUsername.includes(' ')){
      setErrorMessage('No whitespace is allowed for the username');
      return;
    }
    if(!providedPassword){
      setErrorMessage('Please provide a password');
      return;
    }
    if(providedPassword.includes(' ')){
      setErrorMessage('No whitespace is allowed for the password');
      return;
    }
    if(!passwordCheck){
      setErrorMessage('Please validate your password');
      return;
    }
    if(providedPassword && providedPassword != passwordCheck){
      setErrorMessage('The passwords do not match');
      return;
    }

    createUser(providedUsername, providedPassword, passwordCheck);
  }



  

    return (
      <div className="col-md-6 offset-md-3">
        <form id="signUpForm">
          <div>
            <div className="mb-3">
              <label 
                htmlFor="createUsername" 
                className="form-label"
              >
                Username
              </label>
              <input 
                type="createUsername" 
                className="form-control" 
                id="createUsername"
                onChange={e => setUsername(e.target.value)}
              >
              </input>
            </div>
            <div className="mb-3">
              <label 
                htmlFor="createPassword" 
                className="form-label">
                  Password
              </label>
              <input
                type="createPassword" 
                className="form-control" 
                id="createPassword"
                onChange={e => setPassword(e.target.value)}
              >
              </input>
            </div>
            <div className="mb-3">
              <label 
                htmlFor="confirmPassword" 
                className="form-label"
              >
                  Confirm Password
              </label>
              <input
                type="confirmPassword" 
                className="form-control" 
                id="confirmPassword"
                onChange={e => setPasswordCheck(e.target.value)}
              >
              </input>
            </div>
          </div>
          <p>{errorMessage}</p>
          <button 
            type="submit" 
            className="btn col-12 btn-warning"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
}


export default SignupForm;
