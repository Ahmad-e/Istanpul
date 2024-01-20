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

const Sales =()=>{
    const Lang = useSelector((state) => state.counter.language);

    const [openBlockDialog, setOpenBlockDialog] = React.useState(false);
    const [openChangeDialog, setOpenChangeDialog] = React.useState(false);
  
    const handleClickOpenBlockDialog = () => {
        setOpenBlockDialog(true);
    };
    const handleCloseBlockDialog = () => {
        setOpenBlockDialog(false);
    };
    const handleClickOpenChangeDialog = () => {
        setOpenChangeDialog(true);
    };
    const handleCloseChangeDialog = () => {
        setOpenChangeDialog(false);
    };

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
                        <InputLabel id="demo-simple-select-label">{Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={product}
                            label={Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "}
                            onChange={handleChangeProduct}
                        >
                            <MenuItem value={10}>sweets</MenuItem>
                            <MenuItem value={20}>drinks</MenuItem>
                            <MenuItem value={30}>other product</MenuItem>
                        </Select>
                    </FormControl>

                </Col>
                <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangeSalary} style={{ width: "100%" }} id="outlined-number" type="number" label={Lang === "Ar" ? (" السعر ") : Lang === "En" ? ("salary") : "зарплата"} variant="outlined" />
                </Col>
                <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangeQuantity} value={quantity} style={{ width: "100%" }} id="outlined-number" type="number" label={Lang==="Ar" ? (" الكمية ") : Lang==="En"? (" quantity ") : " Количество "} variant="outlined" />
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
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" Product name ") : " наименование товара "} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> code_id </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? (" السعر ") : Lang === "En" ? ("salary") : "зарплата"} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}  </StyledTableCell>
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
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">drinks</StyledTableCell>
                                    <StyledTableCell align="start">124124</StyledTableCell>
                                    <StyledTableCell align="start">20$</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">drinks</StyledTableCell>
                                    <StyledTableCell align="start">124124</StyledTableCell>
                                    <StyledTableCell align="start">20$</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">drinks</StyledTableCell>
                                    <StyledTableCell align="start">124124</StyledTableCell>
                                    <StyledTableCell align="start">20$</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog}  variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>

                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
            {/* delete dialog */}
            <Dialog
                open={openBlockDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseBlockDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{Lang === "Ar" ? (" حذف مبيع ") : Lang === "En" ? ("Delete saled product") : "удалить проданный товар"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {Lang === "Ar" ? ("هل انت متأكد من عملية الحذف") : Lang === "En" ? ("are sure of the deleting process") : "уверены в процессе удаления"}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className="App_button" onClick={handleCloseBlockDialog}>{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button>
                </DialogActions>
            </Dialog>
            
            {/* change dialog */}
            <Dialog
                open={openChangeDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseChangeDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{Lang === "Ar" ? ("  تعديل العنصر ") : Lang === "En" ? ("change product") : "изменить продукт"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <Col style={{ margin: "30px 0px" }}>
                        <TextField onChange={handleChangeSalary} style={{ width: "100%" }} id="outlined-number" type="number" label={Lang === "Ar" ? (" السعر ") : Lang === "En" ? ("salary") : "зарплата"} variant="outlined" />
                    </Col>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className="App_button" onClick={handleCloseChangeDialog}>{Lang === "Ar" ? (" إلغاء التعديل ") : Lang === "En" ? ("console") : "Отменить изменение"}</Button>
                <Button className="App_button" onClick={handleCloseChangeDialog}>{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}
export default Sales