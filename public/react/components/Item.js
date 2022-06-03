import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

export const Item = (props) => {

  return  <Card sx={{ maxWidth: 345, backgroundColor: blue}}>
  <CardMedia
    component="img"
    height="140"
    image= {props.singleItem.imageUrl}
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {props.singleItem.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {props.singleItem.description}
    </Typography>
    <Typography variant="h5" color ="text.secondary">
      {props.singleItem.price}$
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" onClick={()=>{props.setIsEditClicked(true)}}>Edit</Button>
    <Button size="small" onClick={()=>{props.deleteItem(props.id)}}>Delete</Button>
  </CardActions>
</Card>
} 
	
//<img className = "card-image" src = {props.singleItem.imageUrl}/>
//<h3>{props.singleItem.name}</h3>
//<p>{props.singleItem.description}</p>
//<span style={{marginRight:'2rem',fontWeight:'bold'}}>${props.singleItem.price}</span>
//<button style={{marginRight:'1rem'}} onClick={()=>{props.setIsEditClicked(true)}}>Edit</button>
//<button onClick={()=>{props.deleteItem(props.id)}}>Delete</button> 