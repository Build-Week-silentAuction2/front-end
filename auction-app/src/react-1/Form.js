import React,{useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "../actions/userAction";
import axios from 'axios'
import axiosWithAuth from "../utils/axiosWithAuth";

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
 margin-top: 5%;
 `

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
         history.push('/bid')
     }

    // const formSubmit = () => {
    //     axiosWithAuth()
    //     dispatch(registerUser(users,history))

    // }
    

    return(
        <StyledDiv>
        <StyledForm>

        <form onSubmit = {formSubmit}>
            <label htmlFor="username">Username: </label>
            <input 
            type = "text"
            name = "username"
            id = "username"
            value = {users.username}
            onChange = {inputChange}
            /><br></br>

            <label htmlFor = "password">Password: </label>
            <input
            type = "text"
            name = "password"
            id = "password"
            value = {users.password}
            onChange = {inputChange}
            /><br></br>

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
            <button className="register-btn" type = "submit" onClick={() =>  (formSubmit)}>Sign Up</button>
            <p>Member already?</p>
            <button className="login-btn" onClick={() => history.push("/login")}>Login</button>
        </form>
        </StyledForm>
        </StyledDiv>
    )
}