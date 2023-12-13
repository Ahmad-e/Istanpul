import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Test from '../test.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSelector } from 'react-redux';

const Baket =()=>{

    const Lang=useSelector((state) => state.counter.language);

    return(
        <Container >
            <Row className="justify-content-center" >
                <Col  lg={8} md={10} sm={7} xs={10}>
                    <Row style={{ padding : "0px" }} className=" baket_card" >
                        <Col  lg={4} md={5} sm={12} style={{ padding : "0px" }}>
                            <img className={ " baket_img_card" + (Lang==='Ar' ? (" b_r_tr_img  b_r_br_img ") : (" b_r_tl_img b_r_bl_img "))  } src={Test}  />
                        </Col>
                        <Col lg={4} md={3} sm={12} className="baket_info_card" > 
                                <h4> Super shampoo </h4>
                                <div className="light_font">the best shampoo in the world</div>
                                <h4 className="gold-color" > 1000 $ </h4>
                                <Form > 
                                <Form.Group>
                                    <Form.Label>
                                    {Lang==="Ar" ? ("الكمية ") : Lang==="En"? ("Quantity ") : "Количество "}:
                                    </Form.Label>
                                <Form.Control
                                    style={{ maxWidth: "100px" }}
                                    required
                                    type="number"
                                    min={1}
                                    maxLength="10"
                                />
                                </Form.Group>
                                </Form>
                        </Col>
                        <Col className="total" lg={3} md={2} sm={12} xs={12}>
                        {Lang==="Ar" ? ("المجموع ") : Lang==="En"? ("total ") : "Общая "}:<h4 style={{ display:"inline-block" }} className="App-text">1000$</h4><br/>
                        <Button href="/search" variant="outline-danger" className="keyword_button"  >Remove</Button>
                        </Col>
                    </Row>
                    <Row style={{ padding : "0px" }} className=" baket_card" >
                        <Col  lg={4} md={5} sm={12} style={{ padding : "0px" }}>
                            <img className={ " baket_img_card" + (Lang==='Ar' ? (" b_r_tr_img  b_r_br_img ") : (" b_r_tl_img b_r_bl_img "))  } src={Test}  />
                        </Col>
                        <Col lg={4} md={3} sm={12} className="baket_info_card" > 
                                <h4> Super shampoo </h4>
                                <div className="light_font">the best shampoo in the world</div>
                                <h4 className="gold-color" > 1000 $ </h4>
                                <Form > 
                                <Form.Group>
                                    <Form.Label>
                                    {Lang==="Ar" ? ("الكمية ") : Lang==="En"? ("Quantity ") : "Количество "}:
                                    </Form.Label>
                                <Form.Control
                                    style={{ maxWidth: "100px" }}
                                    required
                                    type="number"
                                    maxLength="10"
                                    min={1}
                                />
                                </Form.Group>
                                </Form>
                        </Col>
                        <Col className="total" lg={3} md={2} sm={12} xs={12}>
                        {Lang==="Ar" ? ("المجموع ") : Lang==="En"? ("total ") : "Общая "}:<h4 style={{ display:"inline-block" }} className="App-text">1000$</h4><br/>
                        <Button href="/search" variant="outline-danger" className="keyword_button"  >Remove</Button>
                        </Col>
                    </Row>
                </Col>
                
                <Col style={{ height:"100%" , display:"grid" }} className="baket_card" lg={3} md={7} sm={8} xs={10}>
                    <div >
                        <span>{Lang==="Ar" ? ("عنصر") : Lang==="En"? ("item") : "пункт "}1 : </span><h5 className="App-text end_card_baket" >5000$</h5><br/>
                        <span>{Lang==="Ar" ? ("عنصر") : Lang==="En"? ("item") : "пункт "}2  : </span> <h5 className="App-text end_card_baket" >100$</h5><br/>
                        <span>{Lang==="Ar" ? ("عنصر") : Lang==="En"? ("item") : "пункт "}3  : </span> <h5 className="App-text end_card_baket" >90$</h5>

                    </div><br/>
                    <div>
                    {Lang==="Ar" ? ("المجموع ") : Lang==="En"? ("total ") : "Общая "} : <h4 className="gold-color end_card_baket" >5190 $</h4>
                    </div>
                    <br/>
                    <Button style={{     width: "200px" , margin: "auto" }} href="/regester" className="App_button">Continue to payment<ArrowForwardIcon/> </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Baket