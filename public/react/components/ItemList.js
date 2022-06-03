import React from 'react';
import { Item } from './Item';
import { EditItem } from './EditItemForm';


export const ItemList = ({item, deleteItem,isEditClicked, setIsEditClicked}) => {
    
	
	return <>

		{
			item.map((singleItem, idx) => {
				return <>
					<Item singleItem={singleItem} deleteItem ={deleteItem} 
				             key={idx} id={singleItem.id} isEditClicked ={isEditClicked} setIsEditClicked= {setIsEditClicked}/>  
				</>
				
			})
		}
		
	</>
} 
