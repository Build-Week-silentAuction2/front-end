import React from 'react';
// import logo from './logo.svg';
import './App.css';
//components
import Form from "./Components/Form";
import Login from "./Components/Login";
//dependencies 
// import * as yup from "yup";
// import styled from "styled-components";
import {Route,Link} from "react-router-dom";
// import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className = "routes">
      <Route exact path = "/">
      <Link to = "/Login">Login</Link>
        <Form/>
      </Route>
      <Route exact path = "/Login">
      <Link to = "/">Sign up </Link>
        <Login/>
      </Route>
      </div>
    </div>
  );
}

export default App;
