import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'antd';

const Home = () => {
    return(
      <>
        <div className='welcome'> 
          <h1 className="headers">Welcome to <span style={{color:'white', backgroundColor:'grey', borderRadius:'1rem', padding: '.5rem'}}>Silent-Auction!</span></h1>
          <p>Welcome to our our online auction platform</p>
          <Button style={{border:'1px solid black', width:'11rem', margin:'auto'}}> <Link style={{color:'black'}} to="/Login/SignUp">Get Started</Link></Button>
        </div>
      </>
  
      
  )}
  
  export default Home;