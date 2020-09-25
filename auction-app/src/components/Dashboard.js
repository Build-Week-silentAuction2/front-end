import React, {useReducer, useEffect, useState} from 'react'
import {CardDeck , Card, Button} from "react-bootstrap";
import axios from 'axios';





const Bids = () => { 
  function bidReducer (state, action){
    console.log('Action', action)
   switch (action.type){
      case "PLAYSTATION_BID":
        return {
          ...state,
          PlaystationBid: state.PlaystationBid + action.payload,
          PlaystationAmount: action.payload
        }


        case 'XBOX_BID':
          return{
            ...state,
            xboxBid: state.xboxBid + action.payload,
            xboxAmount: action.payload

          }

          case 'IPHONE_BID':
          return{
            ...state,
            iphoneBid: state.iphoneBid + action.payload,
            IphoneAmount: action.payload

          }

          case 'TV_BID':
          return{
            ...state,
            tvBid: state.tvBid + action.payload,
            tvAmount: action.payload

          }

          case 'MACBOOK_BID':
          return{
            ...state,
            macBookBid: state.macBookBid + action.payload,
            macBookAmount: action.payload

          }

          case 'LAMBO_BID':
          return{
            ...state,
            lamboBid: state.lamboBid + action.payload,
            lamboAmount: action.payload

          }



        default:
          return state
    }
  }

  const initialState = {
    PlaystationBid: 499.99,
    PlaystationAmount: 0,
    xboxBid: 499.99,
    xboxAmount: 0,
    iphoneBid: 1500.00,
    iphoneAmount: 0,
    tvBid: 600.99,
    tvAmount: 0,
    macBookBid: 1200.99,
    macBookAmount: 0,
    lamboBid: 250000,
    lamboAmount: 0,
    
    
    isBidAmount: false,
    isRemoveAmount: false
  }

  const [state, dispatch] = useReducer(bidReducer, initialState)
  const [bids, setBids] = useState({});

  console.log('State',  state)
  

  useEffect(() => {
    axios
  .get("https://silent-auction-september.herokuapp.com/bids")
  .then(res => {
      console.log(res, 'api working');
      setBids(res.data)
       })
  .catch(err => 
     console.log("axios post err msg :", err));


  }, [])




return <>
<p>{setBids}</p>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://gamespot1.cbsistatic.com/uploads/screen_large/1591/15918215/3735420-ps5thumb3%281%29.jpg" />
    <Card.Body>
      <Card.Title>PLAYSTATION</Card.Title>
      <Card.Text>
        PLAYSTATION 5 USED ONLY PLAY WITH IT A COUPLE OF TIMES 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button onClick={() => dispatch({type: "PLAYSTATION_BID", payload: 100})}variant="success">BID</Button> {' '}
  <p>
 Current bid <b>${state.PlaystationBid} USD</b>
     </p>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://gamespot1.cbsistatic.com/uploads/scale_landscape/1587/15875866/3615291-xbox-series-x-main.jpg" />
    <Card.Body>
      <Card.Title>XBOX SERIES X</Card.Title>
      <Card.Text>
        XBOX SERIES X FOR SALE MY GIRLFRIEND TOLD ME EITHER I SALE THE XBOX OR SHE'S LEAVING ME
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button onClick={() => dispatch({type: "XBOX_BID", payload: 100})}variant="success">BID</Button> {' '}
    <p>
 Current bid <b>${state.xboxBid} USD</b>
  </p>
    
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/04/iphone-12-design-leak.jpg" />
    <Card.Body>
      <Card.Title>IPHONE 12</Card.Title>
      <Card.Text>
        BRAND NEW IPHONE 12 SEALED BOX
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button onClick={() => dispatch({type: "IPHONE_BID", payload: 100})}variant="success">BID</Button> {' '}
     <p>
   Current bid <b>${state.iphoneBid} USD</b>
   </p>
    </Card.Footer>
  </Card>
</CardDeck>

<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/DyhfVXjEsCVRPbcXonuNuV_UD8Q=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13673692/cwelch_190107_3143_lgoled_0002.jpg" />
    <Card.Body>
      <Card.Title>Brand New TV</Card.Title>
      <Card.Text>
       LG TV HAS A SMALL CRACK STILL WORKS GREAT
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button onClick={() => dispatch({type: "TV_BID", payload: 100})}variant="success">BID</Button> {' '}
  <p>
 Current bid <b>${state.tvBid} USD</b>
     </p>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--BcXcD88z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/5sn1ah1x2i3kh1pqi1kg.jpg" />
    <Card.Body>
      <Card.Title>MACBOOK PRO</Card.Title>
      <Card.Text>
        GREAT FOR CODING 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button onClick={() => dispatch({type: "MACBOOK_BID", payload: 100})}variant="success">BID</Button> {' '}
    <p>
 Current bid <b>${state.macBookBid} USD</b>
  </p>
    
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/09/79/0d/09790d3aeafad82cdfb26c8391cdf0b1.jpg" />
    <Card.Body>
      <Card.Title>LAMBORGHINI URUS</Card.Title>
      <Card.Text>
        SELLING MY LAMBORGHINI URUS 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button onClick={() => dispatch({type: "LAMBO_BID", payload: 100})}variant="success">BID</Button> {' '}
     <p>
   Current bid <b>${state.lamboBid} USD</b>
   </p>
    </Card.Footer>
  </Card>
</CardDeck>

</>
}
export default Bids