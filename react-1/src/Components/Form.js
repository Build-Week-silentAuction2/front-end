import React,{useState} from "react";
import {Link} from "react-router-dom";
import Login from "./Login";
import styled from "styled-components";

export default function Form() {
    //state
    const [users, setUsers] = useState({
        username: "",
        password: "",
        // email: "",
        sellers: false
    });
    //onChange
    const inputChange = event => {
        event.persist();
        console.log("users state: ", users);
        console.log("This is a check for checkbox result : ", event.target.checked);
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setUsers({...users, [event.target.name]: value});
    }
    //onSubmit
    const formSubmit = event => {
        event.preventDefault();
    }

    //styling
    const StyledDiv = styled.div`
    border: solid green;
    `
    const StyledForm = styled.div`
    border: solid red;
    width: 20%;
    display:flex;
    justify-content: center;
    margin-left: 40%;
    margin-top: 10%;
    `
    return(
        <StyledDiv>
        <StyledForm>
        
        <form onSubmit = {formSubmit}>
            <label htmlFor = "username">Username </label>
            <input 
            type = "text"
            name = "username"
            id = "username"
            value = {users.username}
            onChange = {inputChange}
            /><br></br>

            <label htmlFor = "password">Password </label>
            <input
            type = "text"
            name = "password"
            id = "password"
            value = {users.password}
            onChange = {inputChange}
            /><br></br>

            <label htmlFor = "sellers">Sellers ?</label>
            <input 
            type = "checkbox"
            name = "sellers"
            id = "sellers"
            checked = {users.sellers}
            onChange = {inputChange}
            /><br></br>
            {/* <button type ="submit">Sign Up</button> */}
            <button type = "submit">Button signup</button>
        </form>
        </StyledForm>
        </StyledDiv>
    )
}