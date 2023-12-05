import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Test from '../test.jpg';
import CardItem from '../commponents/card';

const Offers =()=>{
    return(
        <div>
            <Row className="justify-content-center">
                <Col xlg={2} lg={3} md={5} sm={12} >
                    <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" offer="20" />
                </Col>
                <Col xlg={2} lg={3} md={5} sm={12} >
                    <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" offer="30" />
                </Col>
                <Col xlg={2} lg={3} md={5} sm={12} >
                    <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" offer="5" />
                </Col>
                <Col xlg={2} lg={3} md={5} sm={12} >
                    <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" offer="50" />
                </Col>
            </Row>
        </div>
    )
}
export default Offers