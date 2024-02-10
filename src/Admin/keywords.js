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
import axios from "axios";

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
    const kinds = useSelector((state) => state.counter.kinds);
    const [open, setOpen] = React.useState(false);
    const [data,setData] = React.useState([]);
    const [name, setName] = React.useState('');
    const [errNewName,setErrNewName] = React.useState(false);
    const [errNewChangedName,setErrNewChangedName] = React.useState(false);
    const [idChanged,setIdChanged] = React.useState(0);
    const [nameChanged,setNameChanged] = React.useState('');


    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeNewName = (event) => {
        setNameChanged(event.target.value)
    }
    /* axios conect with API */

    React.useEffect(() => {  
            axios.get("http://rest.istanbulru.com/api/showProductTypes")
            .then((response) => setData(response.data.types))
            .catch((error) => console.log(error));
    }, []);
    const addNewWord = () =>{
        if(name==='')
        {
            setErrNewName(true)
        } else{
            try {
                const response = axios.post('https://rest.istanbulru.com/api/addProductType', {
                name:name
                }).then((response) => {
                console.log(response.data);
                setData(response.data.types);
                }).catch((error) => console.log(error));
                setErrNewName(false)
            } catch (e) {
                    throw e;
            }
        }
    }
    const changeWord = () =>{
        if(nameChanged === '')
        {
            setErrNewChangedName(true)
        }
        else
        {
            try {
                const response = axios.post('https://rest.istanbulru.com/api/editProductType', {
                    id:idChanged,
                    name:nameChanged
                }).then((response) => {
                    setData(response.data.types);
                }).catch((error) => console.log(error));
                setErrNewChangedName(false)
            } catch (e) {
                throw e;
            }
            setOpen(false);
        }
    }


    const handleClose = () => {
      setOpen(false);
    };

    return(
        <Container>
            <Row className="justify-content-center" >
                <Col style={{ margin: "30px 0px" }}  className="input_item_admin" lg={4} md={6} sm={12}>
                    <TextField error={errNewName} style={{ width: "100%" }} id="outlined-basic" label={Lang === "Ar" ? ("نوع بضائع جديد") : Lang === "En" ? ("New product type") : "Новый тип продукта"} variant="outlined" onChange={handleChangeName} />
                </Col>
                <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={2} md={3} sm={10}>
                    <Button onClick={()=>addNewWord()} className="App_button"><h5>{Lang === "Ar" ? ("حفظ البيانات") : Lang === "En" ? ("save data") : "Начать покупки"}</h5></Button>
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
                                {
                                    data.map((item)=>{
                                        return(
                                            <StyledTableRow key={"name"}>
                                                <StyledTableCell component="th" scope="row">
                                                    {item.id}
                                                </StyledTableCell>
                                                <StyledTableCell align="start">{item.name}</StyledTableCell>
                                                <StyledTableCell align="start"><Button onClick={()=>{setIdChanged(item.id);setOpen(true);console.log(idChanged)}} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
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
                <DialogTitle>{Lang === "Ar" ? (" تعديل النوع ") : Lang === "En" ? ("Change type") : "изменить тип"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                <Row className="justify-content-center" >
                    <Col   className="input_item_admin" >
                        <TextField error={setErrNewChangedName} style={{ width: "100%" }} id="outlined-basic" label={Lang === "Ar" ? ("نوع بضائع ") : Lang === "En" ? ("Product type") : "Новый тип продукта"} variant="outlined" onChange={handleChangeNewName} />
                    </Col>
                </Row>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className="App_button" onClick={handleClose}>{Lang === "Ar" ? (" إلغاء التعديل ") : Lang === "En" ? ("console") : "Отменить изменение"}</Button>
                <Button className="App_button" onClick={()=>changeWord()}>{Lang === "Ar" ? ("حفظ البيانات") : Lang === "En" ? ("save data") : "Начать покупки"}</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
    
}
export default Keywords
