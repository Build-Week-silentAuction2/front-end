// import axios from "axios";

// const SET_BUYER_ACTION = "SET_BUYER_ACTION";


// const buyerAction = (id, amount) => dispatch => {
//     axios.put("waiting for url", amount)
//     .then(res => dispatch({type: PLACE_BID, payload: response.data})
//     }

// export {SET_BUYER_ACTION, buyerAction};

import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const AddAuctionItem = createSlice({
    name: 'auctionItems',
    initialState: {},
    reducers: {
      addAuctionItem(state, action) {
        axios
          .post('https://silent-auction-september.herokuapp.com/items', action.payload)
          .then( response => {
          console.log(response, action.payload)
          })
          .catch(err => console.log(err))  
      }
    }
  })
  
  export const { addAuctionForm } = AddAuctionItem.actions
  
  export default AddAuctionItem.reducer
