import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "../utils/privateRoute";
// import SellerDashboard from ""
// import BuyerDashboard from ""

function App() {
  return (
    <div className="App">
      <div className="private-routes">
      <PrivateRoute path="/seller-dashboard" component={SellerDashboard} />
      <PrivateRoute path="/buyer-dashboard" component={BuyerDashboard} />
      </div>
    </div>
  );
}

export default App;
