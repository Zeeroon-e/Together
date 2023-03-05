import React from 'react'
import './loginbox.scss'
import { useNavigate } from 'react-router-dom'

 function LoginBox() {
  const navigate = useNavigate();
  function RedirectSignup (){
    navigate('/signup');
  }

  return (
    <div className='login-container'>
        <h2>Together</h2>
        <div className='input-field'>
            <label>E-mail</label>
            <input type="text"  className='email-input'/>    
        </div>
        <div className='input-field'>
            <label>Password</label>
            <input type="text"  className='password-input'/>    
        </div>
        <button className='sign-in-btn'>Sign in</button>
        <div className='signup-section'>
          <p>Dont have an account?</p>
          <button className='sign-in-btn' onClick={RedirectSignup}>Sign up</button>
        </div>
    </div>
  )
}

export default LoginBox;
