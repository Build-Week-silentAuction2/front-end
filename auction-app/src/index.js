import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react-1/App';
import * as serviceWorker from './serviceWorker';

// remember this toolkit
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import rootReducer from "./reducer";
import {BrowserRouter as Router} from "react-router-dom";


const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
