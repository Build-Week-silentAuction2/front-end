import React from 'react';
// import logo from './logo.svg';
import './App.css';
//components
import Form from "./Components/Form";
// import Login from "./Components/Login";
//dependencies 
// import * as yup from "yup";
// import styled from "styled-components";
import {Route} from "react-router-dom";
// import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className = "routes">
      {/* <Form />
      <Login /> */}
      {/* <Route exact path = "/" component = {Form}/>
      <Route exact path = "/Login" component = {Login}/> */}
      <Route exact path = "/">
        <Form/>
      </Route>
      </div>
    </div>
  );
}

export default App;
