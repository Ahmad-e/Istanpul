import {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import axios from "axios";

import Logo from './logo'
import Ads from './ads'
import Order from './order'


const Main_page_admin_ads =()=>{

    const token = useSelector((state) => state.counter.token);
    const [logo,setLogo]=useState([]);
    const [ads,setAds]=useState([]);
    const [order,setOrder]=useState([]);

    useEffect(() => {
        axios.get("https://rest.istanbulru.com/api/showAdsOrdersLogos",{
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' +token 
            }
        })
        .then((response) => {
            //console.log(response.data);
            setLogo(response.data.Logos);
            setAds(response.data.Ads);
            setOrder(response.data.Orders);
        })
        .catch((error) => console.log(error));
}, []);

    return(
        <Container>
            <Logo data={logo} />
            <Ads data={ads} />
            <Order data={order} />
        </Container>
    )
}
export default Main_page_admin_ads