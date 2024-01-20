import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import $ from "jquery";

import O1 from '../../assets/images/order1.jpg';
import O2 from '../../assets/images/order2.jpg';
import O3 from '../../assets/images/order3.jpg';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

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


  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const Order=()=>{

    const Lang = useSelector((state) => state.counter.language);
    const [open, setOpen] = React.useState(false);
      
    const handleClickOpen = () => {
        setOpen(true);
    };
      
    const handleClose = () => {
        setOpen(false);
    };

    $(document).ready(function () {
        $('#upload-order-img').change(function () {
            var filename = ($(this).val());
            console.log(filename)
            $('#file-upload-order').html(filename);
            if (filename != "") {
                setTimeout(function () {
                    $('.upload-wrapper').addClass("uploaded");
                }, 600);
                setTimeout(function () {
                    $('.upload-wrapper').removeClass("uploaded");
                    $('.upload-wrapper').addClass("success");
                }, 1600);
            }
        });
    });


    return(
            <Row className="justify-content-center" >
                <Col className="input_item_admin" lg={12} xs ={12}>
                {Lang === "Ar" ? ("يمكنك إضافة و حذف الصور من قائمة الأوردر") : Lang === "En" ? ("You can add and delete pictures from the order list") : "Вы можете добавлять и удалять изображения из списка заказов."}
                </Col>
                <Col className="input_item_admin" lg={3} md={5} sm={12}>
                    <div class="main-wrapper">
                        <div class="upload-main-wrapper">
                            <div style={{ margin:"0px" }} class="upload-wrapper ">
                                <input type="file" id="upload-order-img" accept="image/*" />
                                <svg version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="224.3881704980842 176.8527621722847 221.13266283524905 178.8472378277154" width="221.13" height="178.85"><defs><path d="M357.38 176.85C386.18 176.85 409.53 204.24 409.53 238.02C409.53 239.29 409.5 240.56 409.42 241.81C430.23 246.95 445.52 264.16 445.52 284.59C445.52 284.59 445.52 284.59 445.52 284.59C445.52 309.08 423.56 328.94 396.47 328.94C384.17 328.94 285.74 328.94 273.44 328.94C246.35 328.94 224.39 309.08 224.39 284.59C224.39 284.59 224.39 284.59 224.39 284.59C224.39 263.24 241.08 245.41 263.31 241.2C265.3 218.05 281.96 199.98 302.22 199.98C306.67 199.98 310.94 200.85 314.93 202.46C324.4 186.96 339.88 176.85 357.38 176.85Z" id="b1aO7LLtdW"></path><path d="M306.46 297.6L339.79 297.6L373.13 297.6L339.79 255.94L306.46 297.6Z" id="c4SXvvMdYD"></path><path d="M350.79 293.05L328.79 293.05L328.79 355.7L350.79 355.7L350.79 293.05Z" id="b11si2zUk"></path></defs><g><g><g><use opacity="1" fill="#ffffff" fill-opacity="1"></use></g><g><g><use opacity="1" fill="#363535" fill-opacity="1"></use></g><g><use opacity="1" fill="#363535" fill-opacity="1"></use></g></g></g></g></svg>
                                <span class="file-upload-text">Upload File</span>
                                <div class="file-success-text">
                                    <svg version="1.1" id="check" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100">
                                        <circle style={{ fill: "rgba(0,0,0,0)", stroke: "#ffffff", strokeWidth: 10, strokeMiterlimit: 10 }} cx="49.799" cy="49.746" r="44.757" />
                                        <polyline style={{ fill: "rgba(0,0,0,0)", stroke: "#ffffff", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} points="27.114,51 41.402,65.288 72.485,34.205 " />
                                    </svg>
                                    <span>Successfully</span>
                                </div>
                            </div>
                            <p id="file-upload-order"></p>
                        </div>
                    </div>
                </Col>
                <Col className="input_item_admin" lg={3} md={5} sm={12}>
                <Button href="/regester" className="App_button"><h5>{Lang === "Ar" ? ("حفظ الصورة") : Lang === "En" ? ("Save image") : "Сохранить"}</h5></Button>
                </Col>
                <Col className="input_item_admin" lg={12} sm={12} style={{ maxWidth: 500  }} >
                    <TableContainer  component={Paper}>
                        <Table sx={{ minWidth: 320  }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start" >id</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? ("  الصورة ") : Lang === "En" ? (" image") : "изображение"} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"} </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"1"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">
                                        <img
                                            src={O1}
                                            width="150"
                                            height="75"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                            />
                                    </StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"2"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">
                                        <img
                                            src={O2}
                                            width="150"
                                            height="75"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                            />
                                    </StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>
                                
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"3"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">
                                        <img
                                            src={O3}
                                            width="150"
                                            height="75"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                            />
                                    </StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{Lang === "Ar" ? ("  حذف الصورة ") : Lang === "En" ? ("Delete image") : "удалить изображение"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    {Lang === "Ar" ? (" هل أنت متأكد من عملية الحذف") : Lang === "En" ? ("are sure of the deleting process") : "уверены в процессе удаления"}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button className="App_button" onClick={handleClose}>{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button>
                    </DialogActions>
                </Dialog>
            </Row>
    )
}
export default Order