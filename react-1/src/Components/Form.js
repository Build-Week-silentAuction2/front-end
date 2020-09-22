import React,{useState} from "react";
// import {Link} from "react-router-dom";
// import Login from "./Login";
import styled from "styled-components";
import * as yup from "yup";

export default function Form() {
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
        // axios
        // .post("https://reqres.in/api/users", users)
        // .then(res => {
        //     console.log("res axios msg :", res);
        // })
        // .catch(err => 
        //     console.log("axios post err msg :", err));
    }

    //styling
    // const StyledDiv = styled.div`
    // border: solid green;
    // `
    // const StyledForm = styled.div`
    // border: solid red;
    // width: 20%;
    // display:flex;
    // justify-content: center;
    // margin-left: 40%;
    // margin-top: 10%;
    // `
    return(
        
        
        <form onSubmit = {formSubmit}>
            <label htmlFor = "username">Username </label>
            <input 
            type = "text"
            name = "username"
            id = "username"
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
            {/* <button type ="submit">Sign Up</button> */}
            <button type = "submit">Button signup</button>
        </form>
        
    )
}