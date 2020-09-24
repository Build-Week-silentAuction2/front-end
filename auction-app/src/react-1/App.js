import React from 'react';
import '../App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "../privateRoute";
import SellerDashboard from "../components/sellerDashboard";
import BuyerDashboard from "../components/buyerDashboard";
import Bids from '../components/Bids'
//components
import Form from "./Form";
import Login from "./Login";
//dependencies 
import * as yup from "yup"
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="private-routes">
        {/* <Route path='/bid' components={Bids} /> */}
      <PrivateRoute path="/bid" component={Bids} />
      <PrivateRoute path="/buyer-dashboard" component={BuyerDashboard} />
      </div>
    </div>
  );
}

export default App;
