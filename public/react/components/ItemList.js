import React from 'react';
import { Item } from './Item';
import { EditItem } from './EditItemForm';


export const ItemList = ({item, deleteItem,isEditClicked, setIsEditClicked,selectedId, setSelectedId, setDetailViewClicked, detailViewClicked,singleItemData,setSingleItemData,detailId, setDetailId, fetchSingleItem, isItemListDisplay, setIsItemListDisplay}) => {
    
	
	return <>

		{
			item.map((singleItem, idx) => {
				return <>
					<Item singleItem={singleItem} deleteItem ={deleteItem} 
				                                  key={idx} 
												  id={singleItem.id} 
												  isEditClicked ={isEditClicked}
												  setIsEditClicked= {setIsEditClicked}
												  selectedId={selectedId} 
												  setSelectedId={setSelectedId} 
												  detailViewClicked={detailViewClicked} 
												  setDetailViewClicked={setDetailViewClicked} 
												  fetchSingleItem={fetchSingleItem} 
												  singleItemData={singleItemData}
												  setSingleItemData ={setSingleItemData}
												  detailId={detailId} 
												  setDetailId = {setDetailId}
												  isItemListDisplay={isItemListDisplay}
												  setIsItemListDisplay={setIsItemListDisplay}
												  />  
				</>
				
			})
		}
		
	</>
} 
