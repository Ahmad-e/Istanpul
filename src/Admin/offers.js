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
  


const AdminOffers =()=>{
    const Lang=useSelector((state) => state.counter.language);

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
                        <InputLabel id="demo-simple-select-label">{Lang==="Ar" ? (" النوع ") : Lang==="En"? (" type ") : " Тип "}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedtype}
                            label={Lang==="Ar" ? (" النوع ") : Lang==="En"? (" type ") : " Тип "}
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
                        <InputLabel id="demo-simple-select-label">{Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedtype}
                            label={Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "}
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
                    <TextField onChange={handleChangeQuantity} style={{ width: "100%" }} id="outlined-number"  type="number" label={Lang==="Ar" ? ("الكمية من العنصر") : Lang==="En"? ("Quantity of Offer") : "количество продукта"} variant="outlined" />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangediscount} style={{ width: "100%" }} id="outlined-number"  type="number" label={Lang==="Ar" ? ("نسبة الخصم ") : Lang==="En"? (" discount percentage ") : " процент скидки "} variant="outlined" />
                </Col>
            </Row>
            <Row  className="justify-content-center" >
                <Col style={{ margin: "40px 0px" }}  >
                    {Lang==="Ar" ? ("اضغط حفظ البيانات لإضافة العرض إلى الجدول و ظهوره للمستخدمين") : Lang==="En"? (" click save data to add offer to table ") : " нажмите «Сохранить данные», чтобы добавить предложение в таблицу "}<br/>
                    <Button href="/regester" className="App_button"><h5>{Lang==="Ar" ? ("حفظ البيانات") : Lang==="En"? ("save data") : "Начать покупки"}</h5></Button>    
                </Col>
            </Row>


            <Row className="justify-content-center" >
                <Col lg={12} sm={12} >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} >{Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "}</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> id </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang==="Ar" ? ("السعر القديم") : Lang==="En"? (" Old salary ") : " Старая зарплата "} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang==="Ar" ? ("نسبة الخصم ") : Lang==="En"? (" discount percentage ") : " процент скидки "} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang==="Ar" ? ("السعر الجديد") : Lang==="En"? (" New salary ") : " Новая зарплата "} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang==="Ar" ? ("إيقاف ") : Lang==="En"? (" stop ") : " останавливаться "} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"} </StyledTableCell>
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
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang==="Ar" ? ("إيقاف ") : Lang==="En"? (" stop ") : " останавливаться "}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"name"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">1</StyledTableCell>
                                    <StyledTableCell align="start">200</StyledTableCell>
                                    <StyledTableCell align="start">10%</StyledTableCell>
                                    <StyledTableCell align="start">180</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang==="Ar" ? ("إيقاف ") : Lang==="En"? (" stop ") : " останавливаться "}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"name"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">1</StyledTableCell>
                                    <StyledTableCell align="start">200</StyledTableCell>
                                    <StyledTableCell align="start">10%</StyledTableCell>
                                    <StyledTableCell align="start">180</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang==="Ar" ? ("إيقاف ") : Lang==="En"? (" stop ") : " останавливаться "}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"name"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">1</StyledTableCell>
                                    <StyledTableCell align="start">200</StyledTableCell>
                                    <StyledTableCell align="start">10%</StyledTableCell>
                                    <StyledTableCell align="start">180</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang==="Ar" ? ("إيقاف ") : Lang==="En"? (" stop ") : " останавливаться "}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"name"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">1</StyledTableCell>
                                    <StyledTableCell align="start">200</StyledTableCell>
                                    <StyledTableCell align="start">10%</StyledTableCell>
                                    <StyledTableCell align="start">180</StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang==="Ar" ? ("إيقاف ") : Lang==="En"? (" stop ") : " останавливаться "}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                </StyledTableRow>

                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
            {/* block dialog */}
            <Dialog
                open={openBlockDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseBlockDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{Lang==="Ar" ? ("إيقاف ") : Lang==="En"? (" stop ") : " останавливаться "}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {Lang==="Ar" ? ("إيقاف العرض يعني إظهار البضائع بالسعر القديم دون خصومات ") : Lang==="En"? (" Stopping the offer means showing the goods at the old price without discounts ") : " Остановить акцию – значит показать товар по старой цене без скидок. "}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className="App_button" onClick={handleCloseBlockDialog}>{Lang==="Ar" ? ("إيقاف ") : Lang==="En"? (" stop ") : " останавливаться "}</Button>
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
                    <Col className="input_item_admin" >
                        <TextField onChange={handleChangeQuantity} style={{ width: "100%" }} id="outlined-number"  type="number" label={Lang==="Ar" ? ("الكمية من العنصر") : Lang==="En"? ("Quantity of Offer") : "количество продукта"} variant="outlined" />
                    </Col>
                    <Col className="input_item_admin" >
                        <TextField onChange={handleChangediscount} style={{ width: "100%" }} id="outlined-number"  type="number" label={Lang==="Ar" ? ("نسبة الخصم ") : Lang==="En"? (" discount percentage ") : " процент скидки "} variant="outlined" />
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
export default AdminOffers