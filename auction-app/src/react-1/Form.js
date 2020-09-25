import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "../actions/userAction";
import axios from 'axios'
import axiosWithAuth from "../utils/axiosWithAuth";

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

export default function Form() {
    //state
    const [users, setUsers] = useState({
        username: "",
        password: "",
        // email: "",
        sellers: false
    });

    const history = useHistory();
    const dispatch = useDispatch();

    //formschema
    const formSchema = yup.object().shape({
        username: yup
        .string()
        .min(2, "Atleast 2 characters")
        .required(),
        
        password: yup
        .string()
        .min(3, "Atleast 3 characters")
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
        password: "",
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
  //onChange
  const inputChange = event => {
    event.persist();
    console.log("users state: ", users);
    console.log("This is a check for checkbox result : ", event.target.checked);
    validate(event);
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setUsers({...users, [event.target.name]: value});
}

    
      const formSubmit = event => {
       event.preventDefault();
         axiosWithAuth()
         .post("https://silent-auction-september.herokuapp.com/users/register", users)
         .then(res => {
              console.log("res axios msg :", res);
          })
        .catch(err => 
            console.log("axios post err msg :", err));

        let newUser;

        if (users.sellers === true) {
            newUser = {
               username: users.username,
                password: users.password,
                 role_id: ""
             };
        }

          if (users.sellers === false) {
              newUser = {
                  username: users.username,
              password: users.password,
                 role_id: ""
             };
        }

         dispatch(registerUser(users))
     }

    // const formSubmit = () => {
    //     axiosWithAuth()
    //     dispatch(registerUser(users,history))

    // }
    

    return(
        <React.Fragment>
        <StyledHeader>
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
        <StyledPaddingBottom>
        <StyledButton type = "submit" disabled = {buttonDisabled} onClick={() => (formSubmit)}>Join Now !</StyledButton>

        </StyledPaddingBottom>
    </StyledForm>
    </React.Fragment>

    )
}