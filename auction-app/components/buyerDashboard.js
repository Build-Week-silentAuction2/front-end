import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Auctions from "./Auctions";

// want to set up a dashboard where buyer can place bids
// and save those auctions he placed a bid on

const BuyerDashboard = () => {
    const [watchingAuction, setWatchingAuctions] = useState([])
    const [auctions, setAuctions] = useState({user_id: "", id: ""});

    useEffect(() => {
        axiosWithAuth()
        .get("waiting for url")
        .then(response => {
            console.log("axios from buyer dashboard", response)
            setWatchingAuctions(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    })

    return (
        <div>
        <h2>Your bids:</h2>
        <div className="dashboard">
        <SavedAuctions list={watchedAuctions}/>
        </div>
        {
            auctions.map(auction => {
                <Auctions auction={auction} />
            })
        }
        </div>
    )
}

export default BuyerDashboard;