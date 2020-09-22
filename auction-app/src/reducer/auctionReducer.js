
const initState = {
    auctions: [
        {
        id: Date.now(),
        user_id: "James Bond",
        exp_time: "12:36:00",
        item: {
            name: "golden gun",
            description: "it's goooold",
            price: "$30,000",
            image: "??"
        }
    }
]
}

const auctionReducer = (state= initState, action) => {
    return state
}

export default auctionReducer