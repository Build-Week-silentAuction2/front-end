import React,{useState} from "react";

export default function Login(){
    //state for login info
    const [userLogin, setuserLogin] = useState({
        username: "",
        password: ""
    });
    //onChange
    const inputChange = event => {
        event.persist();
        console.log("UserLogin data: ", userLogin);
        setuserLogin({...userLogin, [event.target.name]: event.target.value});
    }
    //onSubmit
    const formSubmit = event => {
        event.preventDefault();
    }

    return(
        <form onSubmit = {formSubmit}>
            <label htmlFor = "username">Username</label>
            <input 
            type = "text"
            name = "username"
            id = "username"
            value = {userLogin.username}
            onChange = {inputChange}
            /><br></br>
            
            <label htmlFor = "password">Password</label>
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