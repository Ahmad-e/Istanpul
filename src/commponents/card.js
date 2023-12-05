import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from 'react-bootstrap/Button';


const CardItem =(props)=>{

    //const id = props.id;
    const name= props.name;
    const disc = props.disc;
    const imageURL = props.imgURL;
    const price = props.price;
    const offer = props.offer


    return(
        <div className="Card" >
                <Card  style={{ borderRadius:"20px" }}  sx={{ maxWidth: 345 }}>
                    <CardActionArea >
                        <div className={"offer_div "+(offer ? (""):("d_n") )} >
                        {offer}%<TrendingDownIcon/>  offer
                        </div>
                        <CardMedia
                        component="img"
                        height="150"
                        image={imageURL}
                        alt="green iguana"
                        />
                        <CardContent style={{ textAlign:"start" }} >
                            <Typography style={{ textAlign:"start" }} gutterBottom variant="h5" component="div">
                            {name}
                            </Typography>
                            <Typography style={{ textAlign:"start" }} variant="body2" color="text.secondary">
                                {disc}
                            </Typography>
                            <div  className={"gold-color salary "+(offer ? ("consoled_text"):("") )}>
                                {price+"$ "}
                            </div>
                            <div className={"App-text offer_salary "+(offer ? (""):("d_n") )}>
                               <ArrowForwardIcon/> {(price-(price*offer/100))+"$ "}
                            </div>
                            <br/>
                            <div style={{ textAlign:"center" }}>
                                <Button className="App_button">Add to besket <AddShoppingCartIcon /></Button>
                                <Button className="App_button"><FavoriteIcon /></Button>
                            </div>

                        </CardContent>
                    </CardActionArea>
                </Card>
                
        </div>
    )
}
export default CardItem