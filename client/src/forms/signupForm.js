import React from 'react';

const SignupForm = props => {

  // const formCheck = (event) => {
  //   event.preventDefault();
  //   console.log(props.providedUsername);
  //   console.log(props.providedPassword);
  //   console.log(props.passwordCheck);
  // }

  

    return (
      <div className="col-md-6 offset-md-3">

        <form id="signUpForm">
          <div>
            <div className="mb-3">
              <label htmlFor="createUsername" className="form-label">Username</label>
              <input 
                type="createUsername" 
                className="form-control" 
                id="createUsername"
                onChange={e => props.setUsername(e.target.value)}
              >
              </input>
            </div>
            <div className="mb-3">
              <label htmlFor="createPassword" className="form-label">Password</label>
              <input 
                type="createPassword" 
                className="form-control" 
                id="createPassword"
                onChange={e => props.setPassword(e.target.value)}
              >
              </input>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input 
                type="confirmPassword" 
                className="form-control" 
                id="confirmPassword"
                onChange={e => props.setPasswordCheck(e.target.value)}
              >
              </input>
            </div>
          </div>
          <button 
            type="submit" 
            className="btn col-12 btn-warning"
            // onClick={ formCheck}
          >
            Submit
          </button>
        </form>
      </div>
    );
}


export default SignupForm;
