import React from 'react';
import Form from "../react-1/Form";
import Login from "../react-1/Login";

const LoginSignUp = () => {  
  return (
    <div className='login' style={{display:'flex', flexDirection:'space-between', padding:'3rem'}}>
    
    <div>
        <div title="Login" style={{backgroundColor:'grey', border:'1px solid black'}}>
          <Login />
        </div>
     </div>

      
        <div className='center' style={{ width: 300}}>
            <div>
                <h1>Login or Sign Up!</h1>
            </div>
        </div>
      

        <>
        <div title="Sign-Up" style={{backgroundColor:'grey', border:'1px solid black'}}>
          <Form />
        </div>
        </>
    </div>
  )
}

export default LoginSignUp;