import React from 'react';


export const EditItem = ({isEditClicked, setIsEditClicked, itemUpdate, setItemUpdate, updateItem, item}) => {
    function onsubmitHandler(event){
        event.preventDefault()
    }
    
    function onChangeHandler(event){
        const [formValue, formName] = [event.target.value, event.target.name]
         setItemUpdate ((prevValue)=>{
             return {
                 ...prevValue,
             [formName]:formValue
             }
             
         })
    }

      return <>
        {item.map((indvItem, indx)=>{
            console.log(indvItem.id, indx)
        return <>
                <form onSubmit={onsubmitHandler} key={indx}>
                <h3>Edit an Item</h3>
                <div className='editItemform'>
                    <label className='editLabels' htmlFor='item-id'> Item Id</label>
                    <input type='text' id='item-id' name = 'item-id'  placeholder={indvItem.id}/> 
                </div>
                <div className='editItemform'>
                    <label htmlFor='category'> Category</label>
                    <input type='text' id='category' name = 'item-category' placeholder={indvItem.category}/>
                </div>
                <div className='editItemform'>
                    <label htmlFor='item-name'> Item Name</label>
                    <input type='text' id='item-name' name = 'item-name' placeholder={indvItem.name}/>
                </div>
                <div className='editItemform'>
                    <label htmlFor='item-price'> Price</label>
                    <input type='text' id='item-price' name = 'item-price' placeholder={indvItem.price}/>
                </div>
                <div className='editItemform'>
                    <label htmlFor='image-url'> Image Url</label>
                    <input type='text' id='image-url' name = 'image-url' placeholder={indvItem.imageUrl}/>
                </div>
                <div className='editItemform'>
                    <label htmlFor='item-description'> Description</label>
                    <textarea type='text' id='item-description' name = 'item-description' />
                </div>
                <div className='editItemform'>
                    <button type='submit' className='updateButton' onClick={()=>{setIsEditClicked(false); onChangeHandler; updateItem(indvItem.id)}}>Update</button>
                </div>
            </form>
            </>
    })
        }
      </>
    } 