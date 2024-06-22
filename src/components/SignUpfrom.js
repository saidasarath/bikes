import React from 'react';

import '../styles/signform.css';
const SignUpForm = () => {
  return (
    <div className='body-login'>
    <div className="login-container">
      <h2>SignUp</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder="Password" />
        <input type="password" placeholder='Re-enter password'/>
       
        <button type='submit'>Register</button>
      </form>
      <a href='/login'>having account</a>
    </div>
    </div>
  );
};

export default SignUpForm;

