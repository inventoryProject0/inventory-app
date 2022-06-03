import React from 'react';

export const Item = (props) => {

  return <div className='card'>
        <img className = "card-image" src = {props.singleItem.imageUrl}/>
        <h3>{props.singleItem.name}</h3>
        <p>{props.singleItem.description}</p>
        <span style={{marginRight:'2rem',fontWeight:'bold'}}>${props.singleItem.price}</span>
        <button style={{marginRight:'1rem'}} onClick={()=>{props.setIsEditClicked(true)}}>Edit</button>
        <button onClick={()=>{props.deleteItem(props.id)}}>Delete</button> 
  </div>
} 
	