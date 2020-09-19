import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../actions/userAction";

export default function Login(){
    //state for login info
    const [userLogin, setuserLogin] = useState({
        username: "",
        password: ""
    });

    const history = useHistory();
    const dispatch = useDispatch();

    //onChange
    const inputChange = event => {
        event.persist();
        console.log("UserLogin data: ", userLogin);
        setuserLogin({...userLogin, [event.target.name]: event.target.value});
    }
    //onSubmit
    const formSubmit = event => {
        event.preventDefault();

        dispatch(
            loginUser({ username: userLogin.username, password: userLogin.password }, history)
          );
    }

    return(
        <form onSubmit = {formSubmit}>
            <label htmlFor = "username">Username:</label>
            <input 
            type = "text"
            name = "username"
            id = "username"
            value = {userLogin.username}
            onChange = {inputChange}
            /><br></br>
            
            <label htmlFor = "password">Password:</label>
            <input 
            type = "text"
            name = "password"
            id = "password"
            value = {userLogin.password}
            onChange = {inputChange}
            /><br></br>
            <button type = "submit">Log in</button>
        </form>
    )
}