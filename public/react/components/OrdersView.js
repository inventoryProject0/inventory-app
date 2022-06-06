import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function OrdersView (props) {
    const orderDMY = new Date(props.singleOrder.orderDate)
    
  return (<>
            <tr>
                <td className='table-id'>{props.singleOrder.id}</td>
                <td className='table-itmname'>{props.singleOrder.itemName}</td>
                <td className='table-desc'>{props.singleOrder.description}</td>
                <td className='table-qty'>{props.singleOrder.quantity}</td>
                <td className='table-date'>{orderDMY.getMonth()}-{orderDMY.getDate()}-{orderDMY.getFullYear()}</td>
                <td className='table-button'><DeleteIcon/></td>
                <td className='table-button'><EditIcon/></td>
            </tr>
  </>
  )
}


