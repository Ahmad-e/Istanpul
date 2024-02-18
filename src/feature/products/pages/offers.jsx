import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect,useState} from 'react';
import CardItem from '../../../components/card';
import axios from "axios";
import Err404 from '../../../assets/SVGs/err404';
import { useSelector } from 'react-redux';

const Offers =()=>{
    const Lang=useSelector((state) => state.counter.language);
    const [offers,setOffers] = useState([]);
    useEffect(() => {
        try {
            const response = axios.post('https://rest.istanbulru.com/api/searchOffers',{
                best:1
            })
        .then((response) => {
            setOffers(response.data.data)
            console.log(response.data)
            }).catch((error) => {
                console.log(error);
            });
        } catch (e) {
                throw e;
        }
    }, []);
    

    if(offers.length===0)
    return(
        <>
        <Err404 />
            <h4>
                {(Lang === "Ar" ? (" لا بضائع لدينا بهذا الاسم  , حاول البحث مجدداُ") : Lang === "En" ? ("We have no goods with this name, try searching again. ") : " У нас нет товаров с таким названием, попробуйте поискать еще раз.")}
            </h4>
        </>
    )

    return(
        <Container>

            <Row className="justify-content-center">
            {
                offers.map((item)=>{
                            return(
                                <Col xlg={2} lg={3} md={5} sm={12} >
                                   <CardItem id={item.product_id} imgURL={item.img_url} name={item.product_name} disc={item.disc} price={item.old_price} offer={item.percentage} />
                                </Col>
                                    )
                                })
                            }
            </Row>
        </Container>
    )
}
export default Offers