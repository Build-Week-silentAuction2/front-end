import React,{useState, useEffect} from "react";
// import {Link} from "react-router-dom";
// import Login from "./Login";
import styled from "styled-components";
import * as yup from "yup";
import Map from "./Map";
import axios from "axios";

// styling
const StyledDiv = styled.div`
border: solid green;
background: #ededed;
`
const StyledForm = styled.form`
border: solid black;
padding: 13%;
background: #ededed;
`

const StyledButton = styled.button`
background: skyblue;`

const StyledFooter = styled.footer`
padding:1.5%;
background: #474747;`

export default function Form(props) {
    //state
    const [users, setUsers] = useState({
        username: "",
        password: "",
        // email: "",
        // passwordConfirm: "",
        sellers: false
    });

    //formschema
    const formSchema = yup.object().shape({
        username: yup
        .string()
        .min(2, "Atleast 2 characters")
        .required(),
        
        password: yup
        .string()
        .min(6, "Atleast 6 characters")
        .required(),

        // passwordConfirm: yup
        // .string()
        // .oneOf([yup.ref(`password`), null], `Password doesn't match.`)
        // .required(),

        sellers: yup
        .boolean()
    })

    //errorState
    const [errors, setErrors] = useState({
        username: "",
        password: ""
        // passwordConfirm: ""
    });

    //ButtonDisabled
    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        formSchema.isValid(users).then(valid =>{
            setButtonDisabled(!valid);
        });
    }, [users]);

    //validate
    const validate = event => {
    yup
    .reach(formSchema, event.target.name)
    .validate(event.target.value)
    .then(valid => {
        setErrors({...errors, [event.target.name]: ""});
    })
    .catch(err => {
        setErrors({...errors, [event.target.name]: err.errors[0]});
    });
    };
    
    //onChange
    const inputChange = event => {
        event.persist();
        console.log("users state: ", users);
        console.log("This is a check for checkbox result : ", event.target.checked);
        validate(event);
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setUsers({...users, [event.target.name]: value});
    }
    //onSubmit
    const formSubmit = event => {
        event.preventDefault();
        console.log("Users data:", users)
        axios
        .post("https://reqres.in/api/users", users)
        .then(res => {
            console.log("res axios msg :", res.data);
            // props.addNewUser(res.data)
        })
        .catch(err => 
            console.log("axios post err msg :", err));
    }

    return(
        <React.Fragment>
        <StyledDiv>
            <h2>Sign Up</h2> 
        </StyledDiv>  
        <StyledForm onSubmit = {formSubmit}>
            <label htmlFor = "username">Username </label>
            <input 
            type = "text"
            name = "username"
            id = "username"
            placeholder = "Username"
            value = {users.username}
            onChange = {inputChange}
            /><br></br>
            {errors.username.length > 0 ? (
            <p className = "error">{errors.username}</p>)
             : null}

            <label htmlFor = "password">Password </label>
            <input
            type = "password"
            name = "password"
            id = "password"
            placeholder = "Password"
            value = {users.password}
            onChange = {inputChange}
            /><br></br>
            {errors.password.length > 0 ? (
            <p className = "error">{errors.password}</p>)
             : null}

             {/* <label htmlFor = "passwordConfirm">Confirm Password </label>
            <input
            type = "password"
            name = "passwordConfirm"
            id = "passwordConfirm"
            value = {users.passwordConfirm}
            onChange = {inputChange}
            /><br></br>
            {errors.passwordConfirm.length > 0 ? (
            <p className = "error">{errors.passwordConfirm}</p>)
             : null} */}
             

            <label htmlFor = "sellers">Sellers ?</label>
            <input 
            type = "checkbox"
            name = "sellers"
            id = "sellers"
            checked = {users.sellers}
            onChange = {inputChange}
            /><br></br>
            <StyledButton type = "submit" disabled = {buttonDisabled}>Join Now !</StyledButton>
        </StyledForm>
        <StyledFooter>testing</StyledFooter>
        </React.Fragment>
    )
}