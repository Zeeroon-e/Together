import { useState } from 'react';
import SignupBox from '../components/SignupBox';



function SignUp() {
    const [openPop, setOpenPop] = useState(false);

    const signUpPressed = () =>{
        {setOpenPop(true)}
    }
  return (
    <div>
      <SignupBox />
      
    </div>
  )
}

export default SignUp
