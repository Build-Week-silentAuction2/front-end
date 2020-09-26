import React, {useState, useEffect} from 'react';
import '../App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "../privateRoute";
import Home from "../components/Home";
import AddEdit from "../components/Add&Edit";
import SingleItem from "../components/singleItem";
import AuctionPost from "../components/actionpost";
//components
import LoginSignUp from "../components/Login&Signup";
//dependencies 
import Header from "../components/Header";

// API https://silent-auction-september.herokuapp.com/auctions
// API for items https://silent-auction-september.herokuapp.com/items

function App() {

  return (
    <div className="App-box">
      <Header />
      <div className="protected-route">
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/auctionpost" component={AuctionPost} />
      <Route path="/login/signup" component={LoginSignUp} />
     <PrivateRoute path="/addedit" component={AddEdit} />
     <Route path="/items/:id" component={SingleItem} />
      </div>
    </div>
  )

}


export default App;
