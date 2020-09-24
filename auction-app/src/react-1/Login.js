import React,{useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../actions/userAction";
import * as yup from 'yup'
import axios from 'axios'
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Login(){
    //state for login info
    const [userLogin, setuserLogin] = useState({
        username: "",
        password: ""
    });

    const history = useHistory();
    const dispatch = useDispatch();

     //formLoginschema
     const formLoginSchema = yup.object().shape({
        username: yup
        .string()
        .min(2, "Atleast 2 characters")
        .required(),
        
        password: yup
        .string()
        .min(3, "Atleast 3 characters")
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
        setuserLogin({...userLogin, [event.target.name]: event.target.value});
    }
    //onSubmit
    const formSubmit = event => {
        event.preventDefault();

         axiosWithAuth()
         .post("https://silent-auction-september.herokuapp.com/users/login", userLogin)
         .then(res => {
             console.log("res axios msg :", res);
         })
         .catch(err => 
            console.log("axios post err msg :", err));

        dispatch(
            loginUser({ username: userLogin.username, password: userLogin.password })
            
          );
         
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
        {errorLogin.username.length > 0 ? (
        <p className = "error">{errorLogin.username}</p>)
         : null}

        <label htmlFor = "password">Password</label>
        <input 
        type = "text"
        name = "password"
        id = "password"
        value = {userLogin.password}
        onChange = {inputChange}
        /><br></br>
        {errorLogin.password.length > 0 ? (
        <p className = "error">{errorLogin.password}</p>)
         : null}
        <button  onClick={() =>  history.push('/bid')} type = "submit" disabled = {buttonDisabled}>Log in</button>
    </form>
    )
}