import React, { useState, useEffect, useContext } from 'react';
import { AuctionContext } from '../contexts/auctionContext';
import axios from "axios";
import * as moment from 'moment';
import { useHistory } from 'react-router-dom';


// seller form for creating an auction

const nowtime = new Date();

// const initialAuction = {
//     id: 0,
//     name: "",
//     user_id: 0,
//     image_url: "",
//     end_datetime: '',
    
// }


const AuctionForm = () => {
    // The Seller form for creating an auction
    const auctions = useContext(AuctionContext);
    const [auction, setAuction] = useState([])
    const { push } = useHistory();
    let endtime;

    
    useEffect(() => {
        console.log(auctions.auctionList)
    })

    const handleChange = e => {
        setAuction({
            ...auctions,
            id: (auctions.auctionList.length + 1),
            [e.target.name]: e.target.value
        })
    }


    const setEndTime = hours => {
        endtime = moment(nowtime).add(hours, 'h').toDate().toISOString()
        setAuction({
            ...auctions,
            exp_date: endtime
        })
    }

    console.log(endtime)
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://silent-auction-september.herokuapp.com/auctions', auctions)
            .then(res => {
                console.log(res)
                auctions.setAuctionList([
                    ...auctions.auctionList,
                    auctions
                ])
                push('/buyer')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Post your auction</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    placeholder='Title'
                    value={auctions.name}
                />
                <input
                    type='text'
                    name='end_datetime'
                    onChange={setEndTime}
                    placeholder='Length of Auction (in hours)'
                    value={auctions.exp_date}
                />
            <button>Submit Auction!</button>
            </form>
        </div>
    )
}
export default AuctionForm