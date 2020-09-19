import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "../privateRoute";
import SellerDashboard from "../components/sellerDashboard";
import BuyerDashboard from "../components/buyerDashboard";
//components
import Form from "./Components/Form";
import Login from "./Components/Login";
//dependencies 
import * as yup from "yup";
import styled from "styled-components";
import {Route} from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className = "routes">
      <Route exact path = "/" component = {Form}/>
      <Route exact path = "/login" component = {Login}/>
      </div>
      <div className="private-routes">
      <PrivateRoute path="/seller-dashboard" component={SellerDashboard} />
      <PrivateRoute path="/buyer-dashboard" component={BuyerDashboard} />
      </div>
    </div>
  );
}

export default App;
