// Login.js
import React from 'react';
import '../styles/signform.css';

const SignInForm = () => {
  return (
    <div className='body-login'>
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default SignInForm;
