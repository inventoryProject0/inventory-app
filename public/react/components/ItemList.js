import React from 'react';
import { Item } from './Item';

export const ItemList = ({item}) => {
	return <>
		{
			item.map((singleItem, idx) => {
				return <Item singleItem={singleItem} key={idx} />
			})
		}
	</>
} 
