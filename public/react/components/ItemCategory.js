import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ItemCategory = (props) => {

  return <div className='card' >
                <img className = "card-image" src = {props.obj.imageUrl}/>
                <h3>{props.obj.name}</h3>
                <p style={{textDecoration:'underline', color:'blue'}}>View detail</p>
                <span style={{marginRight:'2rem',fontWeight:'bold', color:'#251A67'}}>${props.obj.price}</span>
                <button style={{marginRight:'1rem', marginLeft:'3.5rem'}} >Edit</button>
                <button >Delete</button> 
        </div>
                 
                  
       
  
  
  
  
         
} 