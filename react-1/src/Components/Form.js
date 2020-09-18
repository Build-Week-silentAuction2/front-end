import React,{useState} from "react";

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
    return(
        <form onSubmit = {formSubmit}>
            <label htmlFor = "username">Username</label>
            <input 
            type = "text"
            name = "username"
            id = "username"
            value = {users.username}
            onChange = {inputChange}
            />

            <label htmlFor = "password">Password</label>
            <input
            type = "text"
            name = "password"
            id = "password"
            value = {users.password}
            onChange = {inputChange}
            />

            <label htmlFor = "sellers">Sellers ?</label>
            <input 
            type = "checkbox"
            name = "sellers"
            id = "sellers"
            checked = {users.sellers}
            onChange = {inputChange}
            />
            <button type ="submit">Sign Up</button>
        </form>
    )
}