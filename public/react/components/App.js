import React, { useState, useEffect } from 'react';
import { Item } from './Item';
import { ItemList } from './ItemList'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemData = await response.json();
			
			setItems(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
      <h1>E Commerce Store</h1>
			<h2>All things 🔥</h2>
			<ItemList item={items} />
		</main>
	)
}