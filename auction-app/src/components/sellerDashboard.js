// seller should be able to create auction, delete auction
// need to import useSelector, useDispatch?

import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {AuctionContext} from "../contexts/auctionContext";
import {useHistory, Link} from "react-router-dom";

const SellerDashboard = () => {

    const auctions = useContext(AuctionContext);
    const {push} = useHistory();
    
    useEffect(() => {
        axios.get("https://silent-auction-september.herokuapp.com/auctions")
        .then(response => {
            console.log("axios from seller", response)
            auctions.setAuctionList(response.data)
        })
        .catch(error => {
            console.log("Unable to do that", error)
        })
    }, []);


    const deleteAuction = (auction, event) => {
        event.preventDefault()
        axios.delete(`https://silent-auction-september.herokuapp.com/${auction.id}`)
        .then(response => {
            console.log("deleted!", response)
            const newAuction = auctions.auctionList.filter(item => `${item.id}` !== response.data.id)
            auctions.setAuctionList(newAuction)
        })
        .catch(error => console.log("unable to delete", error))
    }

    return (
        <>
        <div className='header'>
        <h2>Your Auctions:</h2>
        <Link className='header-link' to='/seller-form'>Create new auction!</Link>
        </div>

        {console.log("testing", auctions.auctionList)}

        <div className='seller-auctions'>
        {auctions.auctionList.map(auction => {
            return (
                <div className='card' key={auction.id}>
                    <h3>{auction.name}</h3>
                    <p>End Time: {auction.exp_date}</p>
                    <button onClick={(event) => deleteAuction(auction, event)}>
                        Delete</button>
                    <button onClick={() => push(`/${auction.id}`)}>
                        Edit</button>
                </div>
            )
        })}
    </div>
            
        
        </>
    )
}


export default SellerDashboard