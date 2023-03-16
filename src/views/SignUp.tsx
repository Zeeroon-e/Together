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
        const userExists = await response.json();

        if (response.status === 201 ) {
            if (email.length > 6 && email.includes("@")) {

                if (password.length > 6) {
                    console.log("You have succesfully signed up!: ",userExists);
                    setModal(!modal)
                } else {
                    setoutPutMsg("password lengt must be more then 6 letters")
                }
                
            } else{
                setoutPutMsg("email lengt must be more then 6 letters and include @")
            }
            
        } else {
            setoutPutMsg("Email already in use")
            console.log("Email already in use");
        }
    }

    
    function signUpBtn(){
        userSignUp();
    }

    const redirectLogin = () => {
        navigate('/');
    }

  return (
    <div className='login-container'>
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
        <button className='sign-in-btn' onClick={signUpBtn}>Sign up</button>
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
