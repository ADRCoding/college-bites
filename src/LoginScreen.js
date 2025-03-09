import React, { useState } from 'react';
import './login.css';  

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className = 'bg'>
        <form className = 'login'>
            <h2 className = 'loginTxt'>Login</h2>
            <p className = 'txt'>Connect back to your account</p>
            <div>
                <input className = 'inputField email' name="phone" type='email' placeholder='Phone Number' />
            </div>

            <div>
                <input className = 'inputField password' name="password" type='password' placeholder='Password'/>
            </div>

            <div>
              <p className = 'forgotPw txt'>Forgot Password?</p>
              <p className = 'signup txt'>New? Sign up here!</p>
            </div>

            <div>
                <button className = 'loginBtn' type="submit">Login</button>
            </div>

        </form>
    </div>
  );
}

export default LoginScreen;