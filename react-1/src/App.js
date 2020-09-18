import React from 'react';
import logo from './logo.svg';
import './App.css';
//components
import Form from "./Components/Form";
import Login from "./Components/Login";
//dependencies 
import * as yup from "yup";
import styled from "styled-components";
import Router from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Form />
      <Login />
    </div>
  );
}

export default App;
