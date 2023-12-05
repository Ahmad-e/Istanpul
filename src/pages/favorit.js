import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Test from '../test.jpg';
import Test2 from '../LOGO.png';
import CardItem from '../commponents/card'
const Favorit =()=>{
    const Lang=useSelector((state) => state.counter.language);
    return(
        <div>
            <div>
            <br/><br/>{Lang==="Ar" ? ("هنا العناصر التي تم اختيارها كمفضلة أثناء التسوق") : Lang==="En"? ("Here are the items that were chosen as favorites while shopping") : "Вот товары, которые были выбраны в качестве фаворитов при покупках"}<br/><br/>
            </div>
            <Row className="justify-content-center">
                <Col lg={3} md={6} sm={12} >
                    <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
                </Col>
                <Col lg={3} md={6} sm={12} >
                    <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
                </Col>
                <Col lg={3} md={6} sm={12} >
                    <CardItem id={0} imgURL={Test2} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
                </Col>
                <Col lg={3} md={6} sm={12} >
                    <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
                </Col>
            </Row>
        </div>
    )
}
export default Favorit