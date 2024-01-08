import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CardItem from '../components/card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import Textarea from '@mui/joy/Textarea';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


const AdminOffers =()=>{
    const Lang=useSelector((state) => state.counter.language);

    const [selectedtype, setselectedType] = React.useState('');
    const [offer, setOffer] = React.useState('');
    const [discount,setDiscount] = React.useState(0);
    const [quantity,setQuantity] = React.useState(0);

    const handleChangeProductType = (event) => {
        setselectedType(event.target.value);
      };
    const handleChangediscount =(event)=>{
        setDiscount(event.target.value)
      }
    const handleChangeQuantity = (event)=>{
        setQuantity(event.target.value)
    }
    
      

    return(
        <Container>
            <Row className="justify-content-center">
                <Col className="input_item_admin" lg={3} md={4} sm={6} xs={12} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type of product</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedtype}
                            label="type of product"
                            onChange={handleChangeProductType}
                            >
                            <MenuItem value={10}>sweets</MenuItem>
                            <MenuItem value={20}>drinks</MenuItem>
                            <MenuItem value={30}>other kinds</MenuItem>
                        </Select>
                    </FormControl>
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={6} xs={12} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Product</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedtype}
                            label="Product"
                            onChange={handleChangeProductType}
                            >
                            <MenuItem value={10}>item-1</MenuItem>
                            <MenuItem value={20}>item-2</MenuItem>
                            <MenuItem value={30}>item-3</MenuItem>
                        </Select>
                    </FormControl>
                </Col>
                <Col lg={12} xs={12}>
                <CardItem id={0} imgURL={""} name="Istanpul website" disc="bestwebsite in the world" price="10000" offer={discount} />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangeQuantity} style={{ width: "100%" }} id="outlined-number"  type="number" label="Quantity of Offer" variant="outlined" />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangediscount} style={{ width: "100%" }} id="outlined-number"  type="number" label="discount percentage" variant="outlined" />
                </Col>
            </Row>
            <Row  className="justify-content-center" >
                <Col style={{ margin: "40px 0px" }}  >
                    click save data to add offer to table<br/>
                    <Button href="/regester" className="App_button"><h5>{Lang==="Ar" ? ("حفظ البيانات") : Lang==="En"? ("save data") : "Начать покупки"}</h5></Button>    
                </Col>
            </Row>


            <Row className="justify-content-center" >
                <Col lg={12} sm={12} >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} >Name</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> Offer_id </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> Old salary </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> discount percentage </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> New salary </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> delete </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> change </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"name"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">1</StyledTableCell>
                                    <StyledTableCell align="start">200</StyledTableCell>
                                    <StyledTableCell align="start">10%</StyledTableCell>
                                    <StyledTableCell align="start">180</StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"name"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">1</StyledTableCell>
                                    <StyledTableCell align="start">200</StyledTableCell>
                                    <StyledTableCell align="start">10%</StyledTableCell>
                                    <StyledTableCell align="start">180</StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"name"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">1</StyledTableCell>
                                    <StyledTableCell align="start">200</StyledTableCell>
                                    <StyledTableCell align="start">10%</StyledTableCell>
                                    <StyledTableCell align="start">180</StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"name"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">1</StyledTableCell>
                                    <StyledTableCell align="start">200</StyledTableCell>
                                    <StyledTableCell align="start">10%</StyledTableCell>
                                    <StyledTableCell align="start">180</StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"name"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">1</StyledTableCell>
                                    <StyledTableCell align="start">200</StyledTableCell>
                                    <StyledTableCell align="start">10%</StyledTableCell>
                                    <StyledTableCell align="start">180</StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                </StyledTableRow>

                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
        </Container>
    )
}
export default AdminOffers