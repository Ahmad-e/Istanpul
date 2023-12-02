import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Test from '../test.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Baket =()=>{
    return(
        <Container >
            <Row className="justify-content-center" >
                <Col  lg={8} md={7} sm={6} xs={10}>
                    <Row style={{ padding : "0px" }} className=" baket_card" >
                        <Col style={{ padding : "0px" }} lg={4} md={4} sm={12} >
                            <img className="baket_img_card" src={Test}  />
                            
                        </Col>
                        <Col lg={4} md={4} sm={12} className="baket_info_card" > 
                                <h4> Super shampoo </h4>
                                <div className="light_font">the best shampoo in the world</div>
                                <h4 className="gold-color" > 1000 $ </h4>
                                <Form > 
                                <Form.Group>
                                    <Form.Label>
                                        Quantity:
                                    </Form.Label>
                                <Form.Control
                                    style={{ maxWidth: "100px" }}
                                    required
                                    type="number"
                                    maxLength="10"
                                />
                                </Form.Group>
                                </Form>
                            </Col>
                        <Col className="total" lg={3} md={4} sm={12}>
                            total:<h4 style={{ display:"inline-block" }} className="App-text">1000$</h4>
                        </Col>
                    </Row>
                    <Row style={{ padding : "0px" }} className="baket_card" >
                        <Col style={{ padding : "0px" }} lg={4} md={4} sm={12} >
                            <img className="baket_img_card" src={Test}  />
                            
                        </Col>
                        <Col lg={4} md={4} sm={12} className="baket_info_card" > 
                                <h4> istanbul website </h4>
                                <div className="light_font">the best website in the world</div>
                                <h4 className="gold-color" > 1000 $ </h4>
                                <Form > 
                                    
                                <Form.Group>
                                    <Form.Label>
                                        Quantity:
                                    </Form.Label>
                                <Form.Control
                                    style={{ maxWidth: "100px" }}
                                    required
                                    type="number"
                                    maxLength="10"
                                />
                                </Form.Group>
                                </Form>
                            </Col>
                        <Col className="total" lg={3} md={4} sm={12}>
                            total:<h4 style={{ display:"inline-block" }} className="App-text">1000$</h4>
                        </Col>
                    </Row>
                    <Row style={{ padding : "0px" }} className="baket_card" >
                        <Col style={{ padding : "0px" }} lg={4} md={4} sm={12} >
                            <img className="baket_img_card" src={Test}  />
                            
                        </Col>
                        <Col lg={4} md={4} sm={12} className="baket_info_card" > 
                                <h4> istanbul website </h4>
                                <div className="light_font">the best website in the world</div>
                                <h4 className="gold-color" > 1000 $ </h4>
                                <Form > 
                                <Form.Group>
                                    <Form.Label>
                                        Quantity:
                                    </Form.Label>
                                    <Form.Control
                                        style={{ maxWidth: "100px" }}
                                        required
                                        type="number"

                                        maxLength="10"
                                    />
                                    </Form.Group>
                                </Form>
                            </Col>
                        <Col className="total" lg={3} md={4} sm={12}>
                            total:<h4 style={{ display:"inline-block" }} className="App-text">1000$</h4>
                        </Col>
                    </Row>
                </Col>
                
                <Col style={{ height:"100%" , display:"grid" }} className="baket_card" lg={3} md={4} sm={5} xs={10}>
                    <div >
                        <span>item1 : </span><h5 className="App-text end_card_baket" >5000 $</h5><br/>
                        <span>item2 : </span> <h5 className="App-text end_card_baket" >100 $</h5><br/>
                        <span>item3 : </span> <h5 className="App-text end_card_baket" >90 $</h5>

                    </div><br/>
                    <div>
                        total : <h4 className="gold-color end_card_baket" >5190 $</h4>
                    </div>
                    <br/>
                    <Button style={{     width: "200px" , margin: "auto" }} href="/regester" className="App_button">Continue to payment<ArrowForwardIcon/> </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Baket