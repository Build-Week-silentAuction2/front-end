import React from "react";

function Map(props) {
    console.log("Props data :", props);
    return(
        <h1>lol</h1>
        // <div className = "user-card">
        //     {props.newUser.map((user,id) => (
        //         <div className = "test" key = {user.id}>
        //         <h1>Welcome {user.username}, to Silent Auction # 2 ! </h1>
        //         <p>You have the role of a {user.sellers === true ? "Seller and Buyer!" : "Buyer!"}</p>
        //         <p>id: {user.id}</p>
        //     </div>
        //     ))}
        // </div>
    )
}

export default Map;