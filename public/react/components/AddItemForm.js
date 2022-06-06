import React from 'react';
import CloseIcon from '@mui/icons-material/Close';


export const AddItem = ({addNewItem, setAddNewItem, postItem,setAddItemClicked,isItemListDisplay, setIsItemListDisplay}) => {
    
    function onsubmitHandler(event){
        event.preventDefault()
    }
    
    function onChangeHandler(event){
        const [formValue, formName] = [event.target.value, event.target.name]
        console.log(formName)
        setAddNewItem((prevValue)=>{
             return {
                 ...prevValue,
             [formName]:formValue
             }
         })
    }

      return <> 
                <form onSubmit={onsubmitHandler} style={{margin:'0rem 2rem 2rem 2rem'}}>
                    <div className='EditformHeader'>
                        <h3 style={{marginRight:'3rem'}}>Add an Item</h3> 
                        <span onClick={()=>{setAddItemClicked(false);setIsItemListDisplay(true)}}><CloseIcon style={{marginTop:'1rem'}}/></span>  
                    </div>
                    <label className='editItemform editLabels' htmlFor='category'> Category</label>
                    <input className='editItemform editLabels inputSiz' type='text' id='category' name = 'category'  placeholder='category' onChange={onChangeHandler}/> <br></br>
                    <label className='editItemform editLabels' htmlFor='name'> Item Name</label>
                    <input className='editItemform editLabels inputSiz' type='text' id='item-name' name = 'name' placeholder='name' onChange={onChangeHandler}/><br></br>
                    <label className='editItemform editLabels' htmlFor='price'> Price</label>
                    <input className='editItemform editLabels inputSiz' type='text' id='item-price' name = 'price'  placeholder='price' onChange={onChangeHandler} /><br></br>
                    <label className='editItemform editLabels' htmlFor='imageUrl'> Image Url</label>
                    <input className='editItemform editLabels inputSiz' type='text' id='image-url' name = 'imageUrl'  placeholder='url' onChange={onChangeHandler}/><br></br>
                    <label  className='editItemform editLabels' htmlFor='description'> Description</label>
                    <textarea className='editItemform editLabels textAreaSiz' type='text' id='item-description' name = 'description' onChange={onChangeHandler}/><br></br>
                    <button type='submit' className='updateButton editItemform' onClick={()=>{setAddItemClicked(false); postItem();setIsItemListDisplay(true)}}>Submit</button>
            </form>
      </>
    } 