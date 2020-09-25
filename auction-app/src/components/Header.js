import React from "react";
import { useHistory } from "react-router-dom";
import {Route, Link} from "react-router-dom";
import { PageHeader } from 'antd';
import {  Button  } from 'antd';

function Header() {
  const history = useHistory();
  return (
    <PageHeader style={{ width:'100%', color:'white', fontFamily: 'DM Mono, monospace', backgroundColor:'dodgerblue', display:'flex', border:'1px solid black'}}
    className="page-header">
        <button
        onClick={() => {
          localStorage.clear();
          history.push("/LoginSignUp");
        }}
        className="logout"
      >Log Out</button>
      <div style={{display:"flex"}}>
        <Button  className='antButton' type='ghost' style={{width:'100%'}}> <Link style={{textDecoration:"none"}} className="NavLink" to="/">Home</Link> </Button>
         <Button  className='antButton' type='ghost' style={{width:'100%'}}> <Link className="NavLink" to="/AuctionPost">Auctions</Link> </Button>
       <Button  className='antButton' type='ghost' style={{width:'100%'}}> <Link className="NavLink" to="/AddEdit">Post An Item</Link></Button>
      <Button  className='antButton' type='ghost' style={{width:'100%'}}> <Link className="NavLink" to="/Login/SignUp">Login/Sign Up</Link></Button>
      </div>
    </PageHeader>
  );
}

export default Header;