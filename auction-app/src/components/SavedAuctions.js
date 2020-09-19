import React from "react";

const SavedAuction = ({list}) => {
    return (
        <div className="saved">
        <h3>Auctions You've Bid On</h3>
            {list.map(auction => {
                return (
                    <div>{auction}</div>
                )
            })}
        </div>
    )
}

export default SavedAuction;