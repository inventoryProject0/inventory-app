import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

export const SingleItem = (props) => {
    console.log(props.singleItemData)

    return   <div className='singlview'>
                <div className='Singlecard'>
                    <div className="SinleItemCloseButton">
                        <CloseIcon onClick={()=>{props.setDetailViewClicked(false);props.setIsItemListDisplay(true)}}/>
                    </div>
                    
                    <img className = "Single-card-image" src = {props.singleItemData.imageUrl}/>
                    <h3>{props.singleItemData.name}</h3>
                    <p>{props.singleItemData.description}</p>
                    <span style={{marginRight:'2rem',fontWeight:'bold', color:'#251A67'}}>${props.singleItemData.price}</span>
                    {/* <button style={{marginRight:'1rem', marginLeft:'3.5rem'}} onClick={()=>{props.setIsEditClicked(true); props.setSelectedId(props.singleItemData.id)}}>Edit</button>
                    <button onClick={()=>{props.deleteItem(props.id)}}>Delete</button>  */}
                </div>
            </div> 
}