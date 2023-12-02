import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from 'react-bootstrap/Button';


const CardItem =(props)=>{

    //const id = props.id;
    const name= props.name;
    const disc = props.disc;
    const imageURL = props.imgURL;
    const price = props.price;


    return(
        <div className="card" >
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="150"
                        image={imageURL}
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {disc}
                            </Typography>
                            <Button className="App_button"><AddShoppingCartIcon /></Button>
                            <Button className="App_button"><FavoriteIcon /></Button><br/>
                            <div className="gold-color">
                                {price+" $"}
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
        </div>
    )
}
export default CardItem