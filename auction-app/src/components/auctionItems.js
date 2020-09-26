import React from 'react';
import AuctionCard from './AuctionCard';

const AuctionItems = props => (

console.log("props from auctionItems", props),
    <div>
      <AuctionCard 
        id={props.id}
        name={props.name}
        description={props.description}
        price={props.price}
      />
    </div>
);



export default AuctionItems;