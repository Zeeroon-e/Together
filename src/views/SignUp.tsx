import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './signup.scss'



function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [outPutMsg, setoutPutMsg] = useState('');

   
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    async function userSignUp() {
        const credentials = {
            email: email,
            password: password
        }
      
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        }
        const response = await fetch('/api/users/signup', requestOptions)
        const data = await response.json();

        if (response.status === 201 ) { 
            console.log("You have succesfully signed up!: ",data);
            setModal(!modal)

        } else if(response.status == 411){
                setoutPutMsg(data);
        }
        else if(response.status == 302){
            setoutPutMsg(data);
    }
        
    }

    
    function signUpBtn(){
        userSignUp();
    }

    const redirectLogin = () => {
        navigate('/');
    }

  return (
    <div className='signup-container'>
        <h2>Together</h2>
        <div className='input-field'>
            <label>E-mail</label>
            <input type="text"  className='email-input' placeholder="example@hotmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>    
        </div>
        <div className='input-field'>
            <label>Password</label>
            <input type="text"  className='password-input' placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>    
        </div>
        <div className='output-text'>
            <p>{outPutMsg}</p>
        </div>
        <button className='sign-up-btn' onClick={signUpBtn}>Sign up</button>
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
