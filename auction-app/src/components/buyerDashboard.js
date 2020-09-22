import React, {useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Auctions from "./Auctions";
import SavedAuctions from "./SavedAuctions";
import {connect} from "react-redux";

// want to set up a dashboard where buyer can place bids
// and save those auctions he placed a bid on

const BuyerDashboard = props => {
    console.log("props from dashboard", props)
    const [watchingAuction, setWatchingAuctions] = useState([])
    const [auctions, setAuctions] = useState({});

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
        <SavedAuctions list={watchingAuction}/>
        </div>
        {
            auctions.map(auction => {
               return <Auctions auction={auction} />
            })
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auctions: state.auction.auctions
    }
}

export default connect(mapStateToProps)(BuyerDashboard);