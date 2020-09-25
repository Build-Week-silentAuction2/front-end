import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import { connect } from 'react-redux';
import AddAuctionForm from "../actions/AddAuctionForm";


const schema = yup.object().shape({
    username: yup.string(),
    name: yup.string().required("Enter the name of your item"),
    description: yup.string().required("Describe your item"),
    image:yup.string(),
    image_url: yup.string(),
    price: yup.string().required("What is the starting price?")
})


const AddItem = props  => {
  console.log('AddItem props', props)

  let history = useHistory();
  const [loading, setLoading] = useState(false)
  const [addItem, setAddItem] = useState({
    name:"",
    description:"",
    image_url:"",
    image:"",
    dateStart:"",
    end_date:"",
    price:""
  })
  
  const handleChanges = event => {
    event.persist()
    validate(event)
    console.log(addItem, event.target.checked);

    let value = event.target.type === 'checkbox' ? event.target.checked :event.target.value 
    setAddItem({...addItem, [event.target.name]: value});
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    setLoading(true)

    axios.post(`https://silent-auction-september.herokuapp.com/items`, addItem)
    .then( response => {
      console.log(response)
      setTimeout(() => {
        setLoading(false)
        history.push('/auctionPost')
      }, 1000)
    })
    .catch(err => console.log(err))
  };

  const [errors, setErrors] = useState({
    username:"",
    name:"",
    description:"",
    image:"",
    image_url:"",
    dateStart:"",
    end_date:"",
    price:""
  });

  const validate = (event) => {
    yup.reach(schema, event.target.name)
    .validate(event.target.value)
    .then( valid =>{
        setErrors({
            ...errors,
            [event.target.name]: ""
        })

    })
    .catch(err => {
        console.log(err.errors)
        setErrors({
            ...errors,
            [event.target.name]: err.errors[0]
        })
    })
  };
  
  if (loading === true) {
    return <h2>Adding Item...</h2>
  } else return (
    <form style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: 'auto'
    }} 
      className="form" 
      onSubmit={submitForm}
    >
      <label htmlFor="username">  Seller Name </label>
      <input
        onChange={handleChanges}
        id="username"
        type="text"
        name="username"
        placeholder="Enter valid Username"
        value={addItem.username}
      />


      <label htmlFor='name'>Item Name/Title</label>
      <input
        value={addItem.name}
        name="name"
        id="name"
        type="name"
        placeholder="Please enter the Item name"
        onChange={handleChanges}
      />

{errors.name.length > 0 ? <div><p style={alert.root}>{errors.name}</p></div>: null}

    <label htmlFor='description'>Item Description</label>
      <textarea
        value={addItem.description}
        name="description"
        id="description"
        type="text field"
        placeholder="Please enter a description"
        onChange={handleChanges}
      />
{errors.description.length > 0 ? <div><p style={alert.root}>{errors.description}</p></div>: null}

<hr></hr>

    <label htmlFor='Image'>Upload Image</label>

    <input
    name="imageLink"
    type="text"
    id="imageLink"
     onChange={handleChanges}/>
     

      <input type="file"
      name="image"
      id="image"
       onChange={handleChanges}/>

       
    <div>
       <img style={{width:'100%'}}src={addItem.imageLink}></img>
    </div>
    








<hr></hr>

    <label htmlFor='price'>Starting Bid/Price</label>
      <input
        value={addItem.password}
        name="price"
        id="price"
        type="number"
        placeholder="Please enter a starting bid/price"
        onChange={handleChanges}
      />

{errors.price.length > 0 ? <div><p style={alert.root}>{errors.price}</p></div>: null}

        <hr></hr>
        <div>
        <button className='submitButton'>Post Item</button>
        </div>
    </form>
  );
    };

const mapStateToProps = null

const mapDispatchToProps = { AddAuctionForm }

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);