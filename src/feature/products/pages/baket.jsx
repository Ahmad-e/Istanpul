import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Test from '../../../assets/images/test.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSelector,useDispatch } from 'react-redux';
import {addProduct,setBaket} from '../../../store';
import {useState,useEffect} from 'react'

const Baket =()=>{

    const Lang=useSelector((state) => state.counter.language);
    const backet=useSelector((state) => state.counter.baket);
    const dispatch = useDispatch();
    const [total,setTotal] = useState(0);
    var all=0;

    useEffect(() => {
        setTotal(0)
        console.log(backet.length)
        for(var i=0 ; i<backet.length ; i++)
        {
            all=all+(!backet[i][0].offer ? (backet[i][0].quantity * backet[i][0].price) : ( backet[i][0].quantity * (backet[i][0].price-(((backet[i][0].offer)*(backet[i][0].price))/100)) ))
        }
        setTotal(all)
    }, [backet]);


    const handleChangeQuantity =(event,data)=>{
        if(data.quantity===0 && event===-1 ) 
            return
        var test=[{
            "id":data.id,
            "name":data.name,
            "imgURL":data.imageURL,
            "disc":data.disc,
            "price":data.price,
            "offer":data.offer,
            "offer_id":data.offer_id,
            "quantity": parseInt(event)
        }];
        dispatch(addProduct(test))
        //console.log(test)
    }

    return(
        <Container >
            <Row className="justify-content-center" >
                <Col  lg={8} md={10} sm={7} xs={10}>
                    {
                        backet.map((item)=>{
                            return(
                                <Row style={{ padding : "0px" }} className=" baket_card" >
                                    <Col  lg={4} md={5} sm={12} style={{ padding : "0px" }}>
                                        <img className={ " baket_img_card" + (Lang==='Ar' ? (" b_r_tr_img  b_r_br_img ") : (" b_r_tl_img b_r_bl_img "))  } src={item[0].imgURL}  />
                                    </Col>
                                    <Col lg={4} md={3} sm={12} className="baket_info_card" > 
                                            <h4> {item[0].name} </h4>
                                            <div className="light_font">{item[0].disc}</div>
                                            <h4 className={"gold-color "+(item[0].offer ? ("d_n") : ("")) } > {item[0].price} </h4>
                                            <h4 className={"App-text "+(item[0].offer ? ("") : ("d_n")) }> offer : {item[0].offer}% </h4>
                                            <h4 className={"gold-color "+(item[0].offer ? ("") : ("d_n")) }>  { item[0].price-(((item[0].offer)*(item[0].price))/100) } </h4>
                                            <Form > 
                                            <Form.Group>
                                                <Form.Label>
                                                {Lang==="Ar" ? ("الكمية ") : Lang==="En"? ("Quantity ") : "Количество "}:
                                                </Form.Label><br/>
                                                <Button onClick={()=>handleChangeQuantity(-1,item[0])} className="App_button" ><h4> - </h4></Button>

                                                <Form.Control
                                                    
                                                    placeholder={item[0].quantity}
                                                    disabled
                                                    onChange={(e)=>handleChangeQuantity(e,item[0])}
                                                    style={{ maxWidth: "100px" , display : "inline-block" }}
                                                    required
                                                    type="number"
                                                    min={1}
                                                    maxLength="10"
                                                />

                                                <Button onClick={()=>handleChangeQuantity(1,item[0])} className="App_button" ><h4> + </h4></Button>
                                            </Form.Group>
                                            </Form>
                                    </Col>
                                    <Col className="total" lg={3} md={2} sm={12} xs={12}>
                                        {Lang==="Ar" ? ("المجموع ") : Lang==="En"? ("total ") : "Общая "}:<h4 style={{ display:"inline-block" }} className="App-text">{!item[0].offer ? (item[0].quantity * item[0].price) : ( item[0].quantity * (item[0].price-(((item[0].offer)*(item[0].price))/100)) )}</h4><br/>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </Col>
                
                <Col style={{ height:"100%" , display:"grid" }} className="baket_card" lg={3} md={7} sm={8} xs={10}>
                    <div >
                        {
                            

                            backet.map((item)=>{
                                if(item[0].quantity>0)
                                return(
                                    <>
                                    <span>{item[0].name} : </span><h5 className="App-text end_card_baket" >{!item[0].offer ? (item[0].quantity * item[0].price) : ( item[0].quantity * (item[0].price-(((item[0].offer)*(item[0].price))/100)) )}</h5><br/>
                                    </>
                                )
                            })
                        }

                    </div><br/>
                    <div>
                    {Lang==="Ar" ? ("المجموع ") : Lang==="En"? ("total ") : "Общая "} : <h4 className="gold-color end_card_baket" >{total} </h4>
                    </div>
                    <br/>
                    <Button style={{     width: "200px" , margin: "auto" }} onClick={()=>console.log(backet)} className="App_button">Continue to payment<ArrowForwardIcon/> </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Baket