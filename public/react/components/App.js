import React, { useState, useEffect } from 'react';
import { Item } from './Item';
import { ItemList } from './ItemList'
import { EditItem } from './EditItemForm';
import { AddItem } from './AddItemForm';
import { SingleItem } from './SingleItem'
import { ItemCategory } from './ItemCategory';
import { CategoryList } from './CategoryList'
// import { OrderList } from './OrderList'
import { OrdersView } from './OrdersView'
import { UsersView } from './UsersView'
import InventoryIcon from '@mui/icons-material/Inventory';


// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { margin } from '@mui/system';

export const App = () => {

	const [items, setItems] = useState([]);
	const [isItemListDisplay, setIsItemListDisplay] = useState(true);
	const [isEditClicked, setIsEditClicked]= useState(false);
	const [itemUpdate, setItemUpdate] = useState({name:'', description: '', price:'', category:'', imageUrl:'' });
	const [selectedId, setSelectedId] = useState();
	const [addItemClicked, setAddItemClicked] = useState(false);
	const [addNewItem, setAddNewItem]=useState({})
	const [detailViewClicked, setDetailViewClicked] = useState(false);
	const [detailId, setDetailId] = useState();
	const [singleItemData, setSingleItemData] = useState({});
	const [selectedCategory, setSelectedCategory] = useState('')
	const [itemsByCategory, setItemsByCategory] =useState([]);
	const [allOrderClicked, setAllOrderClicked] = useState(false);
	const [allOrders, setAllOrders] = useState([]);
	const [usersClicked, setUsersClicked] = useState(false);
	const [allUsers, setAllUsers] = useState([]);
     


	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemData = await response.json();
			
			setItems(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchSingleItem(id){
		try {
			const response = await fetch(`${apiURL}/items/${id}`);
			const itemData = await response.json();
			
			setSingleItemData(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchItemsByCategory(cat){
		try {
			const response = await fetch(`${apiURL}/items/category/${cat}`);
			const itemData = await response.json();
			setItemsByCategory(itemData);
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

	async function postItem(){ 
		const newItem = await fetch(`${apiURL}/items`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(addNewItem)
		  })
		  const data = await newItem.json();

	}

	async function fetchOrders(){
		try {
			const response = await fetch(`${apiURL}/orders`);
			const orderData = await response.json();
			setAllOrders(orderData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	
	async function fetchUsers(){
		try {
			const response = await fetch(`${apiURL}/users`);
			const userData = await response.json();
			
			setAllUsers(userData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

    const currentDate = new Date();
	const ThisYear = currentDate.getFullYear();

	useEffect(() => {
		fetchItems();
	}, []);





	return (
		<main>	
			<nav className='Nav-container'>
				<div className='menu-logo'>
					<h1 style={{fontSize:'2rem', marginRight:'2rem'}}><InventoryIcon style={{fontSize:'2rem'}}/><span style={{color:'#080036'}}>Ware</span><span style={{color:'#F21E6A'}}>house</span>  </h1>
					<ul className='nav-menu'>
						<li>Products</li>
						<li>Pricing</li>
						<li>Orders</li>
						<li>Support</li>
					</ul>
				</div>
				<div className='nav-buttons'>
					<button style={{backgroundColor:'#F5F5F5', border:'1px solid black', color:'black'}}>Log In</button>
					<button>Register</button>
				</div>
			</nav>
            
            
			<div className={isEditClicked?'formCenter':'ItemPage'}>
				    <div className={isEditClicked || detailViewClicked ? 'nodisplay': 'SideBar'}>
							<hr></hr>
							<h3 className='sideBarHeader' onClick={()=>{setAllOrderClicked(false);setUsersClicked(false);setIsItemListDisplay(true)}}>All Items</h3>
							<h3 className='sideBarHeader' onClick={()=>{setUsersClicked(true); setAllOrderClicked(false); setIsItemListDisplay(false); fetchUsers()}}>All Users</h3>
							<h3 className='sideBarHeader' onClick={()=>{setAllOrderClicked(true); setUsersClicked(false); setIsItemListDisplay(false); fetchOrders()}}>All Orders</h3>
							
							<div className='categoty-menu'>
							<hr></hr>
								<h3 className='sideBarHeader'>Items By Category</h3>
								<h5 className='sideBarHeader' onClick={()=>{setSelectedCategory("electronics");fetchItemsByCategory(`${selectedCategory}`)}}>Electronics</h5>
								<h5 className='sideBarHeader' onClick={()=>{setSelectedCategory("jewelery");fetchItemsByCategory(`${selectedCategory}`)}}>Jewelery</h5>
								<h5 className='sideBarHeader' onClick={()=>{setSelectedCategory("men's clothing");fetchItemsByCategory(`${selectedCategory}`)}}>Men's Clothing</h5>
								<h5 className='sideBarHeader' onClick={()=>{setSelectedCategory("women's clothing");fetchItemsByCategory(`${selectedCategory}`)}}>Women's Clothing</h5>
					        </div>
					
			        </div>
			   
			       <div className='DisplayArea'>

				        {(!allOrderClicked && !isItemListDisplay && !addItemClicked && !isEditClicked && !detailViewClicked)  && <div className='user-table'>
						                                               <table >
																			<tr>
																				<th style={{margin:'1rem'}}>Id</th>
																				<th>First Name</th>
																				<th>Last Name</th>
																				<th>Password</th>
																				<th>Email</th>
																				<th>Delete</th>
																				<th>Edit</th>
																			</tr>
																				{allUsers.map((singleUser, indx)=>{
																					return <UsersView singleUser ={singleUser}/>
																				})}
			                                                           </table>
																	</div>
						}
						{allOrderClicked ? <table className='Order-table'>
												<tr>
													<th style={{margin:'1rem'}}>Id</th>
													<th>Item Name</th>
													<th>Item Description</th>
													<th>Qty</th>
													<th>Order Date</th>
													<th>Delete</th>
													<th>Edit</th>
												</tr>
													{allOrders.map((singleOrder, indx)=>{
														return <OrdersView singleOrder ={singleOrder}/>
													})}
			                               </table> :
										  <>
						                  
											{
												addItemClicked ? <AddItem addItemClicked={addItemClicked}
																		setAddItemClicked={setAddItemClicked} 
																		addNewItem={addNewItem}
																		setAddNewItem={setAddNewItem} 
																		postItem={postItem} 
																		isItemListDisplay={isItemListDisplay} 
																		setIsItemListDisplay={setIsItemListDisplay}/> : 
																<div className='addItem-button'>
																	<button className={((isEditClicked) || (detailViewClicked)) || (usersClicked)? 'nodisplay': null} onClick={()=>{setAddItemClicked(true); setIsItemListDisplay(false)}} style={{marginTop:'1rem'}}>Add Item</button>
																</div>
											}

											{
												isItemListDisplay && <div className='container'>
																<ItemList className='card-container' item={items}  
																										deleteItem ={deleteItem} 
																										isEditClicked ={isEditClicked} 
																										setIsEditClicked={setIsEditClicked} 
																										selectedId={selectedId} 
																										setSelectedId={setSelectedId} 
																										detailViewClicked={detailViewClicked} 
																										setDetailViewClicked={setDetailViewClicked}
																										singleItemData={singleItemData}
																										setSingleItemData ={setSingleItemData}
																										detailId={detailId} 
																										setDetailId = {setDetailId}
																										fetchSingleItem={fetchSingleItem}
																										isItemListDisplay={isItemListDisplay}
																										setIsItemListDisplay={setIsItemListDisplay} />
																</div>
											}

											{    
												isEditClicked && <EditItem isEditClicked ={isEditClicked}
																		item={items} 
																		setIsEditClicked={setIsEditClicked} 
																		itemUpdate ={itemUpdate} 
																		setItemUpdate={setItemUpdate} 
																		updateItem = {updateItem} 
																		selectedId={selectedId}
																		isItemListDisplay={isItemListDisplay}
																		setIsItemListDisplay={setIsItemListDisplay}
																		detailViewClicked={detailViewClicked}
																		setDetailViewClicked ={setDetailViewClicked}
																		/>			    
											}
											{
												detailViewClicked && <SingleItem singleItemData={singleItemData}  detailViewClicked={detailViewClicked} setDetailViewClicked={setDetailViewClicked} isItemListDisplay={isItemListDisplay} setIsItemListDisplay={setIsItemListDisplay}/> 
											} 
											
									</>  }                                      	
			        </div>
		    </div>
			
			<footer className='footerContainer'>
				<ul className='footer-links'>
					<li className='links'>Mobile App</li>
					<li className='links'>Community</li>
					<li className='links'>Company</li>
					<li className='footer-companyname'><h3 style={{fontSize:'2rem', marginRight:'2rem'}}><InventoryIcon style={{fontSize:'2rem'}}/><span style={{color:'#080036'}}>Ware</span><span style={{color:'white'}}>house</span>  </h3></li>
					<li className='links'>Help desk</li>
					<li className='links'>Blog</li>
					<li className='links'>Resources</li>
				</ul>
				<ul className='footer-copyRight'>
					<hr style={{paddingRight:'2rem'}}></hr>
					&copy; {ThisYear>2022? <span>`2022 - ${ThisYear}`</span>: <span>{ThisYear}</span>}  Designed and implemented by Yared Gari, Getu Taddesse and Raishan Bernard as an eduactional exercise during Multiverse bootcamp.
				</ul>
			</footer>
		</main>
	)
}