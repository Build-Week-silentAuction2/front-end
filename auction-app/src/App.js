import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./privateRoute";
import SellerDashboard from "./components/sellerDashboard";
import BuyerDashboard from "./components/buyerDashboard";

function App() {
  return (
    <div className="App">
      <div className="private-routes">
      <h1>Welcome to the Silent Auction</h1>
      <PrivateRoute path="/seller-dashboard" component={SellerDashboard} />
      <PrivateRoute path="/buyer-dashboard" component={BuyerDashboard} />
      </div>
    </div>
  );
}

export default App;
