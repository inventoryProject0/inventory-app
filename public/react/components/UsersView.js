import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function UsersView (props) {
    
  return (<>
            <tr>
                <td className='table-id'>{props.singleUser.id}</td>
                <td className='table-name'>{props.singleUser.firstName}</td>
                <td className='table-name'>{props.singleUser.lastName}</td>
                <td className='table-name'>{props.singleUser.password}</td>
                <td className='table-email'>{props.singleUser.email}</td>
                <td className='table-Userbutton'><DeleteIcon/></td>
                <td className='table-Userbutton'><EditIcon/></td>
            </tr>
  </>
  )
}
