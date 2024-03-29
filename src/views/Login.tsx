
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'



import './login.scss'


 function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function RedirectSignup (){
    navigate('/signup');
  }
  
  async function userLogin() {
    const credentials = {
      email: email,
      password: password
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    }
    const response = await fetch('/api/users/login', requestOptions)


    const userExists = await response.json();
    

    if (response.status === 200) {
      localStorage.setItem('activeUser', userExists.email);
      navigate('/homecreate');
    } else {
      console.log("check if email and password are correct. If you dont have an account make sure to sign up");
    }
  }
  
  function signInBtn(){
    userLogin();
  }

  

  return (
    <div className='content-wrapper'>
      <div className='login-container '>
          <h2>Together</h2>
          <div className='input-field'>
              <label>E-mail</label>
              <input type="text" required className='email-input' placeholder="example@hotmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>    
          </div>
          <div className='input-field'>
              <label>Password</label>
              <input type="text" required className='password-input' placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>    
          </div>
          <button className='sign-in-btn' onClick={signInBtn}>Sign in</button>
          <div className='signup-section'>
            <p>Dont have an account?</p>
            <button className='sign-up-btn' onClick={RedirectSignup}>Sign up</button>
          </div>
      </div>
    </div>
  )
}


export default Login;