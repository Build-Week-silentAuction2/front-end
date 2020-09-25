import React from 'react';
import { Card , Button } from 'antd'
import { Link } from 'react-router-dom'

   
const AuctionCard = (props) => {

return (
       <div>
        <Card>
             <img src={props.image} style={{width:'90%',}}/>
             <h1>{props.name}</h1>
             <hr></hr>
             <p>{props.description}</p>
             <p style={{border:'1px solid grey'}}>Current Bid : <span style={{color:'red'}}>{props.price}</span></p>
             <p></p>

        <Button type='primary'><Link to= {`/Items/${props.id}`}> View Item</Link></Button>
        <Button type='danger'>Place Bid</Button>

        </Card>
        </div>
    )


}
  
export default AuctionCard;