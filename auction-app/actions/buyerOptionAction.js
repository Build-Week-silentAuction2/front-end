import axios from "axios";

const SET_BUYER_ACTION = "SET_BUYER_ACTION";


const buyerAction = (id, amount) => dispatch => {
    axios.put("", )
    .then(res => dispatch({type: SET_BUYER_ACTION, payload: response.data})
    }

export {SET_BUYER_ACTION, buyerAction};

// axios.put(url,{body},{headers:{}})