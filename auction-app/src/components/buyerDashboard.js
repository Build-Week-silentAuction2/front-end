import React, { useState, useEffect, useContext } from 'react';
import {AuctionContext} from "../contexts/auctionContext";
import SavedAuction from "./SavedAuctions";
import AuctionCard from './AuctionCard';
import axios from "axios";
const auctionsList = 'https://silent-auction-september.herokuapp.com/auctions'

const BuyersDashboard = () => {
  const auctions = useContext(AuctionContext)

  useEffect(() => {
    axios.get("https://silent-auction-september.herokuapp.com/auctions/items")
    .then(response => {
      console.log("response from buyer dashboard", response.data)
    })
    .catch(error => console.log("unable to get data", error))
  },[])

  return (
    <div>
      <h2>Your watched Bids:</h2>
      <div className="buyers-dashboard">
      <SavedAuction  />
      {
        auctions.auctionsList.map(auction => (
            <AuctionCard auction={auction}/> 
        ))
    }
      </div>
    
    </div>
  )
}

export default BuyersDashboard;