
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
            image: "https://vignette.wikia.nocookie.net/jamesbond/images/5/52/Scaramanga%27s_Golden_Gun.jpg/revision/latest?cb=20121030205430"
        }
    }
]
}

const auctionReducer = (state= initState, action) => {
    return state
}

export default auctionReducer