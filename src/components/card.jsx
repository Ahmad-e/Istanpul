import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from 'react-redux';
import axios from "axios";
import {addProduct,setBaket} from '../store';


const CardItem =(props)=>{
    const token=useSelector((state) => state.counter.token);
    const baket=useSelector((state) => state.counter.baket);
    const dispatch = useDispatch();
    const id = props.id;
    const name= props.name;
    const disc = props.disc;
    const imageURL = props.imgURL;
    const price = props.price;
    const offer = props.offer


    const tuglleFavorite =()=>{

        console.log(id)
        axios.get("https://rest.istanbulru.com/api/toggleFavourite/"+id,{
            headers:{
                "Accept":"application/json",
                "Authorization":"Bearer "+token
            }
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => console.log(error));
    }


    return(
        <div dir="ltr" className="Card" >
                <Card  style={{ borderRadius:"20px" }}  sx={{ maxWidth: 345 }}>
                    <CardActionArea >
                        <div dir="ltr" className={"offer_div "+(offer ? (""):("d_n") )} >
                            {offer}%
                        </div>
                        <CardMedia
                        component="img"
                        height="255"
                        image={imageURL}
                        alt="Downloading image ... "
                        />
                        <CardContent  style={{ textAlign:"start" }} >
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
                                <Button 
                                    onClick={()=>dispatch(setBaket(
                                        [{
                                            "id":id,
                                            "name":name,
                                            "imgURL":imageURL,
                                            "disc":disc,
                                            "price":price,
                                            "offer":offer,
                                            //"offer_id":offerr_id
                                        }]
                                    ))}  
                                    className="App_button"
                                >
                                    Add to besket <AddShoppingCartIcon />
                                </Button>
                                <Button onClick={()=>tuglleFavorite()} className="App_button"><FavoriteIcon /></Button>
                            </div>

                        </CardContent>
                    </CardActionArea>
                </Card>
                
        </div>
    )
}
export default CardItem