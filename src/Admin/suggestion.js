import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdminSuggestion =()=>{
    const Lang = useSelector((state) => state.counter.language);
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
                <Col lg={12} sm={12} >
                <br/><br/>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} >{Lang==="Ar" ? ("اسم العميل") : Lang==="En"? ("customer name") : "Имя Клиента"}</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start">  {Lang==="Ar" ? ("الاعتراض") : Lang==="En"? (" sugggestion") : "предположение"} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang==="Ar" ? ("معلومات العميل") : Lang==="En"? ("customer information") : "Информация для клиентов"}</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"} </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  > {Lang==="Ar" ? ("معلومات العميل") : Lang==="En"? ("customer information") : "Информация для клиентов"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>  
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  > {Lang==="Ar" ? ("معلومات العميل") : Lang==="En"? ("customer information") : "Информация для клиентов"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>  
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  > {Lang==="Ar" ? ("معلومات العميل") : Lang==="En"? ("customer information") : "Информация для клиентов"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>  
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  > {Lang==="Ar" ? ("معلومات العميل") : Lang==="En"? ("customer information") : "Информация для клиентов"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>    
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  > {Lang==="Ar" ? ("معلومات العميل") : Lang==="En"? ("customer information") : "Информация для клиентов"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                </StyledTableRow>  
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  > {Lang==="Ar" ? ("معلومات العميل") : Lang==="En"? ("customer information") : "Информация для клиентов"}</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button  variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
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
                <DialogTitle>{Lang==="Ar" ? ("معلومات العميل") : Lang==="En"? ("customer information") : "Информация для клиентов"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                {Lang==="Ar" ? ("اسم العميل") : Lang==="En"? ("customer name") : "Имя Клиента"} : Ahmad<br/>
                {Lang==="Ar" ? ("رقم الهاتف") : Lang==="En"? ("Phone number") : "номер телефона"} : 097517235<br/>
                {Lang==="Ar" ? ("الأيميل") : Lang==="En"? ("Email") : "Электронная почта"} : homse@gmail.com<br/>
                </DialogContentText>
                </DialogContent>
            </Dialog>
        </Container>
    )
}
export default AdminSuggestion