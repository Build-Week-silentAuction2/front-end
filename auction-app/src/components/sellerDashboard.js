// seller should be able to create auction, delete auction
// need to import useSelector, useDispatch?

import React, {useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import {useHistory, useParams, Link} from "react-router-dom";

const SellerDashboard = () => {
    const [sellerAuction, setSellerAuction] = useState([]);
    const {push} = useHistory();
    
    useEffect(() => {
        axiosWithAuth()
        .get("waiting for url")
        .then(response => {
            console.log("axios from seller", response)
        })
        .catch(error => {
            console.log("Unable to do that", error)
        })
    }, [])

    return (
        <>
        <div className='header'>
        <h2>Your Auctions:</h2>
        <Link className='header-link' to=''>Create new auction!</Link>
        </div>
            
            <div className='seller-auctions'>
                {sellerAuction.map(auction => (
                    console.log("auctions from seller", auction)
                     (
                        // <div className='card' put auction id key here>
                        //     // auction name
                        //     // description
                        //     // time?
                        //     // image
                        //     // click to delete button
                        //     // click to edit button
                        // </div>
                    )
                ))}
            </div>
        </>
    )
}


export default SellerDashboard