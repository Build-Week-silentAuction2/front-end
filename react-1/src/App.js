import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
//components
import Form from "./Components/Form";
import Login from "./Components/Login";
import Map from "./Components/Map";
//dependencies 
// import * as yup from "yup";
// import styled from "styled-components";
import {Route,Link} from "react-router-dom";
// import axios from "axios";

function App() {
  // const [newUser, setNewUser] = useState([]);
  // const addNewUser = userData => {
  //   setNewUser([...newUser, userData]);
  // }
  return (
    <div className="App">
      <div className = "routes">
      <Route exact path = "/">
      <Link to = "/Login">Login</Link>
      <Link to = "/Map">Map</Link>
      <Form/>
        {/* <Form addNewUser = {addNewUser}/> */}
      </Route>
      <Route exact path = "/Login">
      <Link to = "/">Sign up </Link>
        <Login/>
      </Route>
      {/* <Route exact path = "/Map">
      <Link to = "/Login">Login</Link>
      <Link to = "/">Sign up </Link>
        <Map newUser = {newUser}/>
      </Route> */}
      </div>
    </div>
  );
}

export default App;
