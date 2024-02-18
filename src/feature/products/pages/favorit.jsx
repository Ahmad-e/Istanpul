import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Test from '../../../assets/images/test.jpg';
import Test2 from '../../../assets/images/LOGO.png';
import CardItem from '../../../components/card';
import {useEffect,useState} from 'react'
import axios from "axios";

const Favorit =()=>{
    const Lang=useSelector((state) => state.counter.language);
    const token=useSelector((state) => state.counter.token);
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get("https://rest.istanbulru.com/api/showFavourites",{
            headers:{
                "Accept":"application/json",
                "Authorization":"Bearer "+token
            }
        })
        .then((response) => {
            //dispatch(setKinds(response.data.types));
            console.log(response.data);
            setData(response.data.favourites);
        })
        .catch((error) => console.log(error));
    }, []);

    return(
        <Container>
            <div>
            <br/><br/>{Lang==="Ar" ? ("هنا العناصر التي تم اختيارها كمفضلة أثناء التسوق") : Lang==="En"? ("Here are the items that were chosen as favorites while shopping") : "Вот товары, которые были выбраны в качестве фаворитов при покупках"}<br/><br/>
            </div>
            <Row className="justify-content-center">
                {
                    data.map((item)=>{
                        return(
                            <Col lg={3} md={6} sm={12} >
                                <CardItem id={item.product_id} imgURL={item.img_url} name={item.name} disc={item.disc} price={item.price} />
                            </Col>
                        )
                    })
                }
                
            </Row>
        </Container>
    )
}
export default Favorit