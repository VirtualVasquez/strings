import React, {useState} from 'react';
import axios from "axios";

async function loginUser(username, password, socket) {
  try {
    const response = await axios.post('api/login', {
      user_name: username,
      user_pass: password,
    });
    await axios.put('api/users/update-last-active',
      {
        user_id: response.data.user_id
      }
    );
    localStorage.setItem("strings_user_id", response.data.user_id);
    localStorage.setItem('userName', username);
    socket.emit('newUser', { username, socketID: socket.id });
    window.location.replace('/chat');
  } catch (error) {
    console.error(error);
  }
}

function LoginForm({socket}) {
  const [providedUsername, setUsername] = useState(null);
  const [providedPassword, setPassword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    loginUser(providedUsername, providedPassword, socket);
  }


  return (
    <div className="col-md-6 offset-md-3">
      <form id="signInForm">
        <div>
          <div className="mb-3">
            <label
              htmlFor="username"
              className="form-label"
            >
              Username
            </label>
            <input
              type="username"
              className="form-control"
              id="username"
              onChange={e => setUsername(e.target.value)}
            >
            </input>
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={e => setPassword(e.target.value)}
            >
            </input>
          </div>
        </div>

        <button
          type="submit"
          className="btn col-12 btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

    </div>
  );
}

export default LoginForm;
