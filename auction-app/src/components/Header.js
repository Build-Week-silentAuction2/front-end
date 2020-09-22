import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="banner">
      <h2 className="name"> Silent Auction</h2>
    
      <button
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
        className="logout"
      >Log Out</button>
    </div>
  );
}

export default Header;