import React, { useState , useEffect } from "react";
import axios from 'axios';
import AuctionItems from "./auctionItems";
import { useHistory } from 'react-router-dom';

const PostsPage = (props) => {

  const [info , setInfo] = useState([])

  

  useEffect(() => {
      axios
      .get("https://silent-auction-september.herokuapp.com/items/")
      .then(response => {
        console.log(response.data)
          setInfo(response.data);
      }).catch(error => console.log("cannot grab data", error))
  
  }, [])
  
  let history = useHistory();

  return (
  
  <div>
    <h1>Welcome to the auctions page</h1>
    <p> Here you can view current items for bidding</p>
  <div className='PWrapper'>
    
 
      {info.map(item =>{
          return  (
            <div key={item.id}>
              <AuctionItems 
                id = {item.id}
                name = {item.name}
                description = {item.description}
                price = {item.price}
              />
            </div>
          )
      })}

  
  </div>
  </div>  
  );
  };


export default PostsPage;