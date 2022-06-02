import React from 'react';

export const Item = (props) => {

  return <>
    <img src = {props.singleItem.imageUrl}/>
    <h3>{props.singleItem.name}</h3>
    <p>{props.singleItem.description}</p>
    <span>{props.singleItem.price}</span>

    <button>Edit</button>
    <button>Delete</button> 
  </>
} 
	