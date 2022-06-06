import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

export const Item = (props) => {

  return <div className='card' onClick={()=>{props.setDetailViewClicked(true); props.setDetailId(props.singleItem.id); props.fetchSingleItem(props.singleItem.id); props.setIsItemListDisplay(false)}}>
            <img className = "card-image" src = {props.singleItem.imageUrl}/>
            <h3>{props.singleItem.name}</h3>
            <p style={{textDecoration:'underline', color:'blue'}}>View detail</p>
            <span style={{marginRight:'2rem',fontWeight:'bold', color:'#251A67'}} className='card-price'>${props.singleItem.price}</span>
            <button style={{marginRight:'1rem', marginLeft:'3.5rem'}} onClick={()=>{props.setIsEditClicked(true); props.setSelectedId(props.singleItem.id)}}>Edit</button>
            <button onClick={()=>{props.deleteItem(props.id)}}>Delete</button> 
         </div>

} 
	
//<img className = "card-image" src = {props.singleItem.imageUrl}/>
//<h3>{props.singleItem.name}</h3>
//<p>{props.singleItem.description}</p>
//<span style={{marginRight:'2rem',fontWeight:'bold'}}>${props.singleItem.price}</span>
//<button style={{marginRight:'1rem'}} onClick={()=>{props.setIsEditClicked(true)}}>Edit</button>
//<button onClick={()=>{props.deleteItem(props.id)}}>Delete</button> 