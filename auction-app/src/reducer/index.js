import {combineReducers} from "redux";
import userReducer from "./userReducer";
import auctionReducer from "./auctionReducer";

const rootReducer = combineReducers({
user: userReducer,
auction: auctionReducer
});

export default rootReducer;