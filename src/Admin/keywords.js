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


const Keywords = () => {
    const Lang = useSelector((state) => state.counter.language);
    const [name, setName] = React.useState('');

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    return(
        <Container>
            <Row className="justify-content-center" >
                <Col style={{ margin: "30px 0px" }}  className="input_item_admin" lg={4} md={6} sm={12}>
                    <TextField style={{ width: "100%" }} id="outlined-basic" label="new keyword" variant="outlined" onChange={handleChangeName} />
                </Col>
                <Col className="input_item_admin" lg={2} md={3} sm={10}>
                <Button className="App_button"><h5>{Lang === "Ar" ? ("حفظ البيانات") : Lang === "En" ? ("save data") : "Начать покупки"}</h5></Button>
                </Col>
            </Row>
            <Row className="justify-content-center" >
                <Col style={{ maxWidth: 500  }} >
                <TableContainer  component={Paper}>
                        <Table sx={{ minWidth: 320  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start" >id</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> name </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> change </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">drinks</StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"2"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">sweets</StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                </StyledTableRow>
                                
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"3"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">test</StyledTableCell>
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
export default Keywords