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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <Container>
            <Row className="justify-content-center" >
                <Col style={{ margin: "30px 0px" }}  className="input_item_admin" lg={4} md={6} sm={12}>
                    <TextField style={{ width: "100%" }} id="outlined-basic" label={Lang === "Ar" ? ("نوع بضائع جديد") : Lang === "En" ? ("New product type") : "Новый тип продукта"} variant="outlined" onChange={handleChangeName} />
                </Col>
                <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={2} md={3} sm={10}>
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
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang==="Ar" ? (" النوع ") : Lang==="En"? (" type ") : " Тип "} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"} </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">drinks</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"2"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">sweets</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                </StyledTableRow>
                                
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"3"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">test</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                </StyledTableRow>

                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{Lang === "Ar" ? (" تعديل النوع ") : Lang === "En" ? ("Change type") : "изменить тип"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                <Row className="justify-content-center" >
                    <Col   className="input_item_admin" >
                        <TextField style={{ width: "100%" }} id="outlined-basic" label={Lang === "Ar" ? ("نوع بضائع ") : Lang === "En" ? ("Product type") : "Новый тип продукта"} variant="outlined" onChange={handleChangeName} />
                    </Col>
                </Row>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className="App_button" onClick={handleClose}>{Lang === "Ar" ? (" إلغاء التعديل ") : Lang === "En" ? ("console") : "Отменить изменение"}</Button>
                <Button className="App_button" onClick={handleClose}>{Lang === "Ar" ? ("حفظ البيانات") : Lang === "En" ? ("save data") : "Начать покупки"}</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
    
}
export default Keywords