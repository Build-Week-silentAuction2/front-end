import axios from "axios";
import React,{useState, useEffect} from "react";
import * as yup from "yup";


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
            <button type = "submit" disabled = {buttonDisabled}>Log in</button>
        </form>
    )
}