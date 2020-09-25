import axios from "axios";
import React,{useState, useEffect} from "react";
import * as yup from "yup";
import styled from "styled-components";
import {Link} from "react-router-dom";

// styling
const StyledHeader = styled.header`
background: #474747;
color: #cfcfcf;
padding-bottom: 1%;`

const StyledDiv = styled.div`
border: solid green;
background: #ededed;
`
const StyledForm = styled.form`
padding:3%;
background: #ededed;
`
const StyledPadding = styled.div`
padding:1%;
`
const StyledButton = styled.button`
background: skyblue;`

const StyledFooter = styled.footer`
padding:3%;
background: #474747;
color: #cfcfcf;`

const StyledPaddingBottom = styled.div`
padding-bottom: 15%;`
export default function Login(){
    //state for login info
    const [userLogin, setuserLogin] = useState({
        username: "",
        password: ""
    });


    //formLoginschema
    const formLoginSchema = yup.object().shape({
        username: yup
        .string()
        .min(2, "Atleast 2 characters")
        .required(),
        
        password: yup
        .string()
        .min(6, "Atleast 6 characters")
        .required()
    })

    //login errorstate 
    const [errorLogin, setErrorLogin] = useState({
        username: "",
        password: ""
    });

    //ButtonDisabled
    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        formLoginSchema.isValid(userLogin).then(valid =>{
            setButtonDisabled(!valid);
        });
    }, [userLogin]);
    //validateLogin
    const validateLogin = event => {
        yup
        .reach(formLoginSchema, event.target.name)
        .validate(event.target.value)
        .then(valid => {
            setErrorLogin({...errorLogin, [event.target.name]: ""});
        })
        .catch(err => {
            setErrorLogin({...errorLogin, [event.target.name]: err.errors[0]});
        });
        };

    //onChange
    const inputChange = event => {
        event.persist();
        console.log("UserLogin data: ", userLogin);
        validateLogin(event);
        setuserLogin({...userLogin, [event.target.name]: event.target.value});
    }
    //onSubmit
    const formSubmit = event => {
        event.preventDefault();
        // axios
        // .post("https://reqres.in/api/users", userLogin)
        // .then(res => {
        //     console.log("res axios msg :", res);
        // })
        // .catch(err => 
        //     console.log("axios post err msg :", err));
    };

    return(
        <React.Fragment>
            <StyledHeader>
             <Link to = "/">Sign up </Link>
            <h1>Silent Auction</h1>
            </StyledHeader>
        <StyledForm onSubmit = {formSubmit}>
            <h2>Log in</h2>
            <label htmlFor = "username">Username</label>
            <input 
            type = "text"
            name = "username"
            id = "username"
            placeholder = "Username"
            value = {userLogin.username}
            onChange = {inputChange}
            /><br></br>
            {errorLogin.username.length > 0 ? (
            <p className = "error">{errorLogin.username}</p>)
             : null}
             <StyledPadding></StyledPadding>

            <label htmlFor = "password">Password </label>
            <input 
            type = "text"
            name = "password"
            id = "password"
            placeholder = "Password"
            value = {userLogin.password}
            onChange = {inputChange}
            /><br></br>
            {errorLogin.password.length > 0 ? (
            <p className = "error">{errorLogin.password}</p>)
             : null}
             <StyledPadding></StyledPadding>
             <StyledPaddingBottom>
            <StyledButton type = "submit" disabled = {buttonDisabled}>Log in</StyledButton>
            </StyledPaddingBottom>
        </StyledForm>
        <StyledFooter>
            <p>Contact us at thisemail@example.com </p>
            <p>250 Montgomery St, San Franciso, CA 94104 </p>
        </StyledFooter>
        </React.Fragment>
    )
}