import React,{useState, useEffect} from "react";
import {NavLink, useHistory} from "react-router-dom";
// import Login from "./Login";
import styled from "styled-components";
import * as yup from "yup";
import Map from "./Map";
import axios from "axios";

// styling
const StyledHeader = styled.header`
background: #474747;
color: #cfcfcf;
padding-bottom: 1%;`
const StyledDiv = styled.div`
background: #ededed;
`
const StyledForm = styled.form`
padding:3%;
background: #ededed;
`
const StyledPadding = styled.div`
padding:0.3%;
`
const StyledButton = styled.button`
background: skyblue;`

const StyledFooter = styled.footer`
padding:2%;
background: #474747;
color: #cfcfcf;`

const StyledPaddingBottom = styled.div`
padding-bottom: 15%;`



export default function Form(props) {
    //state
    const [users, setUsers] = useState({
        username: "",
        password: "",
        // email: "",
        // passwordConfirm: "",
        sellers: false
    });
    const history = useHistory();
    const routeLogin = () => {
        history.push("/Login");
    }
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
            props.addNewUser(res.data)
        })
        .catch(err => 
            console.log("axios post err msg :", err));
    }

    return(
        <React.Fragment>
            <StyledHeader>
            <NavLink exact to = "/Login" style = {{color: "#cfcfcf"}} >Login</NavLink>
            <NavLink exact to = "/Map" style = {{color: "#cfcfcf"}}>Map</NavLink>
            <h1>Silent Auction</h1> 
            </StyledHeader>  
        <StyledForm onSubmit = {formSubmit}>
            <h2>Sign Up</h2>
            <StyledPadding>
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
             </StyledPadding>

             <StyledPadding>
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
             </StyledPadding>
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
             
             <StyledPadding>
            <label htmlFor = "sellers">Sellers ?</label>
            <input 
            type = "checkbox"
            name = "sellers"
            id = "sellers"
            checked = {users.sellers}
            onChange = {inputChange}
            /><br></br>
            </StyledPadding>
            <StyledPadding>
            <StyledButton type = "submit" disabled = {buttonDisabled} >Join Now !</StyledButton>
            </StyledPadding>
            <StyledPaddingBottom>
            <button onClick ={routeLogin}> Login onClick</button>
            </StyledPaddingBottom>
        </StyledForm>
        <StyledFooter>
            <p>Contact us at thisemail@example.com </p>
            <p>250 Montgomery St, San Franciso, CA 94104 </p>
            </StyledFooter>
        </React.Fragment>
    )
}