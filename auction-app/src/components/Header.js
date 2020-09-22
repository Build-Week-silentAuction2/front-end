import React from "react";
import { useHistory } from "react-router-dom";
import {Route, Link} from "react-router-dom";
import Form from "../react-1/Form";
import Login from "../react-1/Login";

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

      <Route exact path="/">
      <Link to="/login">Login</Link>
      <Form />
      </Route>

      <Route exact path="/login">
      <Link to="/">Sign Up</Link>
      <Login />
      </Route>
    </div>
  );
}

export default Header;