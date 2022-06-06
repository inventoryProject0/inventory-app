import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { textAlign } from '@mui/system';



export const EditItem = ({isEditClicked, setIsEditClicked, itemUpdate, setItemUpdate, updateItem, item,selectedId, isItemListDisplay, setIsItemListDisplay,setDetailViewClicked}) => {
    
    function onsubmitHandler(event){
        event.preventDefault()
    }
    
    function onChangeHandler(event){
        const [formValue, formName] = [event.target.value, event.target.name]
        console.log(formName)
         setItemUpdate((prevValue)=>{
             return {
                 ...prevValue,
             [formName]:formValue
             }
         })
    }
      return <>
        {item.map((indvItem, indx)=>{
            if(indvItem.id===selectedId){
                return <div className='SingleItemEditForm'> 
                <form onSubmit={onsubmitHandler} key={indx} >
                <div className="EditformHeader">
                    <h3 >Edit an Item</h3> 
                    <span onClick={()=>{setIsEditClicked(false);setIsItemListDisplay(true);setDetailViewClicked(false)}}><CloseIcon style={{marginTop:'1rem'}}/></span> 
                </div>
                    <label className='editItemform editLabels' htmlFor='item-id'> Item Id </label>
                    <input className='editItemform editLabels inputSiz' type='text' id='item-id' name = 'item-id'  placeholder={indvItem.id}/>
                    <label className='editItemform editLabels' htmlFor='category'> Category </label>
                    <input className='editItemform editLabels inputSiz' type='text' id='category' name = 'category' value = {itemUpdate.category} placeholder={indvItem.category} onChange={onChangeHandler} />
                    <label className='editItemform editLabels' htmlFor='name'> Item Name</label>
                    <input className='editItemform editLabels inputSiz' type='text' id='item-name' name = 'name' value = {itemUpdate.name} placeholder={indvItem.name} onChange={onChangeHandler}/>
                    <label className='editItemform editLabels' htmlFor='price'> Price</label>
                    <input className='editItemform editLabels inputSiz' type='text' id='item-price' name = 'price' value = {itemUpdate.price} placeholder={indvItem.price} onChange={onChangeHandler}/>
                    <label className='editItemform editLabels' htmlFor='imageUrl'> Image Url</label>
                    <input className='editItemform editLabels inputSiz' type='text' id='image-url' name = 'imageUrl' value = {itemUpdate.imageUrl} placeholder={indvItem.imageUrl} onChange={onChangeHandler}/>
                    <label  className='editItemform editLabels' htmlFor='description'> Description </label>
                    <textarea className='editItemform editLabels textAreaSiz' type='text' id='item-description' name = 'description' value = {itemUpdate.description} onChange={onChangeHandler}/>
                    <button type='submit' className='updateButton' onClick={()=>{setIsEditClicked(false); updateItem(indvItem.id);setIsItemListDisplay(true);setDetailViewClicked(false)}}>Update</button>
            </form>
            </div>
            }
    })
        }
      </>
    } 