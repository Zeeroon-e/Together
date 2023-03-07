import React from 'react'
import LoginBox from '../components/LoginBox';
import background from '../assets/bg.svg';
import './Login.scss'
 function Login() {

  const fetchUsers = async () =>{
      const response = await fetch('/api/users')
      
      console.log(response);
      
  }

  fetchUsers();
  return (

    
    <div className='login-view-container'>
      
        <LoginBox />
        
      
    </div>
  )
}

export default Login;