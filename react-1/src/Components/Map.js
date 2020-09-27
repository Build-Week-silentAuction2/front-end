import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
border: solid black;
background: #474747;
color: #cfcfcf;`

function Map(props) {
    console.log("Props data :", props);
    return(
        <StyledCard>
         {/* <h1>lol</h1> */}
            {props.newUser.map((user,id) => (
                <div className = "test" key = {user.id}>
                <h1>Welcome {user.username}, to Silent Auction # 2 ! </h1>
                <p>You have the role of a {user.sellers === true ? "Seller and Buyer!" : "Buyer!"}</p>
                {/* <p>id: {user.id}</p> */}
            </div>
            ))}
        </StyledCard>
    )
}

export default Map;