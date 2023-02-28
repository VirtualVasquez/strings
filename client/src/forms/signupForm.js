import React, {useState} from 'react';
import axios from "axios";

function validateUsernameandPassword({username, password, confirmPassword}){
  if (!username) {
    return {status: false, msg:'Please provide a username' };
  }
  if (username.includes(' ')) {
    return {status: false, msg:'No whitespace is allowed for the username' };
  }
  if (!username) {
    return {status: false, msg: 'Please provide a password'};
  }
  if (username.includes(' ')) {
    return {status: false, msg: 'No whitespace is allowed for the password' };
  }
  if (!username) {
    return {status: false, msg:'Please validate your password' };
  }
  if (password != confirmPassword) {
    return {status: false, msg:'The passwords do not match' };
  }
  return {status: true, msg: 'valid' };
}

function SignupForm({socket}) {
  const [errorMessage, setErrorMessage] = useState('');
  const [providedUsername, setUsername] = useState(null);
  const [providedPassword, setPassword] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = validateUsernameandPassword(
      providedUsername,
      providedPassword,
      passwordCheck
    );
    if(validation.status){
      createUser(providedUsername, providedPassword, passwordCheck);
    } else {
      setErrorMessage(validation.msg);
    }
  };

  async function createUser(username, password, passcheck) {
    try {
      const response = await axios.post('api/users', {
        user_name: username,
        user_pass: password,
        pass_check: passcheck
      });
      await axios.put('api/users/update-last-active', {
        user_id: response.data.user_id
      });
      localStorage.setItem("strings_user_id", response.data.user_id);
      localStorage.setItem('userName', username);
      socket.emit('newUser', { username, socketID: socket.id });
      window.location.replace('/chat');
    } catch (error) {
      console.error(error);
    }
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
