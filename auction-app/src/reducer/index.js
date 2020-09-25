import {combineReducers} from "redux";
import userReducer from "./userReducer";
import auctionReducer from "./auctionReducer";
import auctionItemsReudcer from "../actions/AddAuctionItem";

const rootReducer = combineReducers({
user: userReducer,
auction: auctionReducer,
auctionItems: auctionItemsReudcer
});

export default rootReducer;