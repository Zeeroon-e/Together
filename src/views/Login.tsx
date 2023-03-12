import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


import './login.scss'


 function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [backendData, setBackendData] = useState([{}]);

  const navigate = useNavigate();

  function RedirectSignup (){
    navigate('/signup');
  }
  
  async function getUsers() {
    const response = await fetch('http://localhost:3005/api/users');
    const users = await response.json();
    console.log(users);
    setBackendData(users)
  }
  
  
  useEffect(() => {
   
  }, [])

  async function userLogin() {
    const credentials = {
      email: userEmail,
      password: password
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    }
    const response = await fetch('http://localhost:3005/api/users/login', requestOptions)

    const userExists = await response.json();
    if (response.status === 200) {
      console.log("Signing in with: ",userExists);
    } else {
      console.log("check if email and password are correct. If you dont have an account make sure to sign up");
    }
  }
  
  function signInBtn(){
    userLogin();
  }

  

  return (
    <div className='login-container'>
        <h2>Together</h2>
        <div className='input-field'>
            <label>E-mail</label>
            <input type="text"  className='email-input' placeholder="example@hotmail.com" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>    
        </div>
        <div className='input-field'>
            <label>Password</label>
            <input type="text"  className='password-input' placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>    
        </div>
        <button className='sign-in-btn' onClick={signInBtn}>Sign in</button>
        <div className='signup-section'>
          <p>Dont have an account?</p>
          <button className='sign-in-btn' onClick={RedirectSignup}>Sign up</button>
        </div>
    </div>
  )
}


export default Login;