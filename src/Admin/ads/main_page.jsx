//import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';


import Logo from './logo'
import Ads from './ads'
import Order from './order'


const Main_page_admin_ads =()=>{
    const Lang = useSelector((state) => state.counter.language);

    return(
        <Container>
            <Logo />
            <Ads/>
            <Order/>
        </Container>
    )
}
export default Main_page_admin_ads