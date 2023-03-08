import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './signUp.scss'



function SignUp() {
    const [openPop, setOpenPop] = useState(false);

    const signUpPressed = () =>{
        {setOpenPop(true)}
    }
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const redirectLogin = () => {
        navigate('/');
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
        <button className='sign-in-btn' onClick={toggleModal}>Sign up</button>
        <div className='signup-section'>
          <p>Have an account?</p>
          <button className='sign-in-btn' onClick={redirectLogin} >Sign in</button>
        </div>
        { modal && (

            <div className='modal'>
                <div className='overlay'>
                    <p>You have succesfully signed up!</p>
                    <button onClick={redirectLogin}>Close</button>
                </div>
            </div>
        )}
        
        
    </div>
  )
}

export default SignUp
