import React, { useState, useEffect } from 'react';
import { Item } from './Item';
import { ItemList } from './ItemList'
import { EditItem } from './EditItemForm';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [isEditClicked, setIsEditClicked]= useState(false)
	const [itemUpdate, setItemUpdate] = useState({name:'', description: '', price:'', category:'', imageUrl:'' })

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemData = await response.json();
			
			setItems(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function deleteItem(id){ 
	const response = await fetch(`${apiURL}/items/${id}`,{
		method: 'DELETE'
	});
	const data = await response.json()
	location.reload()
	}




	async function updateItem(id){ 
		const updatedItem = await fetch(`${apiURL}/items/${id}`, {
			method: 'PUT',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(itemUpdate)
		  })
		  const data = await updateItem.json();
	}



// updateItem={updateItem}

	useEffect(() => {
		fetchItems();
	}, []);
     

	return (
		<main>	
            <h1>E Commerce Store</h1>
			<h2>All things 🔥</h2>
			{isEditClicked ? <EditItem isEditClicked ={isEditClicked} item={items} setIsEditClicked={setIsEditClicked} itemUpdate ={itemUpdate} setItemUpdate={setItemUpdate} updateItem = {updateItem}/>:
							<div className='container'>
								<ItemList className='card-container' item={items}  deleteItem ={deleteItem} isEditClicked ={isEditClicked} setIsEditClicked={setIsEditClicked}/>
							</div>}	
		</main>
	)
}