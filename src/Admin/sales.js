import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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

const Sales =()=>{
    const Lang = useSelector((state) => state.counter.language);
    const [product, setProduct] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);
    const [salary, setSalary] = React.useState(0);

    const handleChangeProduct = (event) => {
        setProduct(event.target.value)
    }

    const handleChangeSalary = (event) => {
        setSalary(event.target.value)
    }

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value)
    }

    return(
        <Container>
            <Row className="justify-content-center" >
                
                <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={3} md={4} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">product</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={product}
                            label="product"
                            onChange={handleChangeProduct}
                        >
                            <MenuItem value={10}>sweets</MenuItem>
                            <MenuItem value={20}>drinks</MenuItem>
                            <MenuItem value={30}>other product</MenuItem>
                        </Select>
                    </FormControl>

                </Col>
                <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangeSalary} style={{ width: "100%" }} id="outlined-number" type="number" label="price" variant="outlined" />
                </Col>
                <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangeQuantity} value={quantity} style={{ width: "100%" }} id="outlined-number" type="number" label="numper of product" variant="outlined" />
                </Col>
                <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={2} md={3} sm={10}>
                    <Button className="App_button"><h5>{Lang === "Ar" ? ("حفظ البيانات") : Lang === "En" ? ("save data") : "Начать покупки"}</h5></Button>
                </Col>
                
            </Row>
            <Row className="justify-content-center" >
                <Col style={{ maxWidth: 680  }} >
                <TableContainer  component={Paper}>
                        <Table sx={{ minWidth: 320  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start" >id</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> product </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> code_id </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> slale </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> change </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> delete </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">drinks</StyledTableCell>
                                    <StyledTableCell align="start">124124</StyledTableCell>
                                    <StyledTableCell align="start">20$</StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">drinks</StyledTableCell>
                                    <StyledTableCell align="start">124124</StyledTableCell>
                                    <StyledTableCell align="start">20$</StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">drinks</StyledTableCell>
                                    <StyledTableCell align="start">124124</StyledTableCell>
                                    <StyledTableCell align="start">20$</StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">drinks</StyledTableCell>
                                    <StyledTableCell align="start">124124</StyledTableCell>
                                    <StyledTableCell align="start">20$</StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>

                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
        </Container>
    )
}
export default Sales