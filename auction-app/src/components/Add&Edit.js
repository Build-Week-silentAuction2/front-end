import React from 'react';
import { Card } from 'antd'
import AddItem from "./AddItem";

const AddEdit = () => {  
  return (
      
    <div className='lsform' style={{display:'flex', flexDirection:'space-between', padding:'3rem'}}>

    <div>
        <Card title="Create Auction" style={{backgroundColor:'grey', border:'1px solid black'}}>
          <AddItem/>
        </Card>
     </div>

      
    </div>
  )
}

export default AddEdit;