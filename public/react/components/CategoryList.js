import React from 'react';
import { ItemCategory } from './ItemCategory';
import { EditItem } from './EditItemForm';


export const CategoryList = ({itemsByCategory}) => {
    
	
	return <>
            {
                itemsByCategory.map((obj, ind) => {
                    return <>
                                <ItemCategory   obj={obj} 
                                                key={ind} 
                                                id={obj.id} 
                                            />  
                            </>
                })
            }
		
	</>
    console.log(obj)
}