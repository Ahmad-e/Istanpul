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

import Load from '../components/load';
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdminSuggestion =()=>{
    const Lang = useSelector((state) => state.counter.language);
    const token = useSelector((state) => state.counter.token);
    const [loading,setLoading]=React.useState(false);
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
    
      const handleClose = () => {
        setOpen(false);
      };

    const [data,setData] = React.useState([]);
    const [userData,setUserData] = React.useState({});

    React.useEffect(() => {
        setLoading(true);
        axios.get("https://rest.istanbulru.com/api/showComplaints",{
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' +token 
            }
        })
            .then((response) => {
                console.log(response.data);
                setData(response.data.message);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setLoading(false);
            });
    }, []);

    const deleteSugg=(id)=>{
        setLoading(true);
        axios.get("https://rest.istanbulru.com/api/deleteComplaint/"+id,{
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' +token 
            }
        })
            .then((response) => {
                console.log(response.data);
                //setData(response.data.message);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setLoading(false);
            });
    }

    const showData=(name,email,phone)=>{
        setUserData({
            "name":name,
            "email":email,
            "phone":phone
        })
        setOpen(true);
        
    }


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
                                {
                                    data.map((item)=>{
                                        return(
                                            <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                {item.user_name}
                                            </StyledTableCell>
                                            <StyledTableCell align="start"> {item.complaint} </StyledTableCell>
                                            <StyledTableCell align="start"><Button onClick={()=>showData( item.user_name , item.email , item.phone_no )} variant="outline-danger" className="keyword_button"  > {Lang==="Ar" ? ("معلومات العميل") : Lang==="En"? ("customer information") : "Информация для клиентов"}</Button></StyledTableCell>
                                            <StyledTableCell align="start"><Button onClick={()=>deleteSugg(item.complaint_id)} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button></StyledTableCell>
                                        </StyledTableRow>
                                        )
                                    })
                                }
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
                {Lang==="Ar" ? ("اسم العميل") : Lang==="En"? ("customer name") : "Имя Клиента"} : {userData.name}<br/>
                {Lang==="Ar" ? ("رقم الهاتف") : Lang==="En"? ("Phone number") : "номер телефона"} : {userData.phone}<br/>
                {Lang==="Ar" ? ("الأيميل") : Lang==="En"? ("Email") : "Электронная почта"} : {userData.email} <br/>
                </DialogContentText>
                </DialogContent>
            </Dialog>
        </Container>
    )
}
export default AdminSuggestion