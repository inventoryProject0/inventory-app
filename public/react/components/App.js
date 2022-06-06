import React, { useState, useEffect } from 'react';
import CustomInput from "./CustomInput.js";
import Button from "./Button";
import { signup, login, logout, useAuth } from "./firebase";
import { Item } from './Item';
import { ItemList } from './ItemList'
import { EditItem } from './EditItemForm';
import { Nav } from './Nav'


// import and prepend the api url to any fetch calls.
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [isEditClicked, setIsEditClicked] = useState(false)
	const [itemUpdate, setItemUpdate] = useState({ name: '', description: '', price: '', category: '', imageUrl: '' })

	async function fetchItems() {
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemData = await response.json();

			setItems(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function deleteItem(id) {
		const response = await fetch(`${apiURL}/items/${id}`, {
			method: 'DELETE'
		});
		const data = await response.json()
		location.reload()
	}




	async function updateItem(id) {
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
			<Nav />
			<div className='container'>
			<form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
           // handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
         //   handleChange={this.handleChange}
            type="password"
          />

          <Button type="button" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
			</div>
		</main>
	)
}