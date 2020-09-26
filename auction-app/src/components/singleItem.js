import React , { useEffect , useState} from 'react';
import axios from 'axios';
import { Card , Button } from 'antd'
import { useParams } from 'react-router-dom';

const SingleItem = (props) => {

const [loading, setLoading] = useState(true)
const [item, setItem] = useState({});

const {id} = useParams();


useEffect(() => {
  
        axios.get(`https://silent-auction-september.herokuapp.com/items/${id}`)
        .then(response => {
          // setLoading(true)
          setItem(response.data);
          console.log(response.data)
          setTimeout(() => {
            setLoading(false)
          }, 1000)
      })
      .catch(error => {
        console.error(error);
      });
  
  }, []);

  if (loading === true) {
    return <h2>Loading Item...</h2>
  } else return(
       <div style={{ width:'100%', display:'flex', justifyContent:'center'}}>
        <Card>
        <img style={{width:'90%'}}/>
             <h1>{item.name}</h1>
             <hr></hr>
             <p>{item.description}</p>
             <p style={{border:'1px solid grey'}}>Current Bid : <span style={{color:'green'}}>{item.price}</span></p>

        <Button type='danger'>Place Bid</Button>

        </Card>
        </div> 
    )

     
     }
export default SingleItem;
