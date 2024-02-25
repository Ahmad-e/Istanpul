import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import Load from '../components/load';

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

  

const Delivery =()=>{
    const Lang=useSelector((state) => state.counter.language);
    const token = useSelector((state) => state.counter.token);
    const [loading,setLoading]=React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [citis,setCitis]=React.useState([]);
    const [data,setData]=React.useState([]);

    React.useEffect(() => {
      setLoading(true);
      axios.get("https://rest.istanbulru.com/api/showCities")
          .then((response) => {
              setCitis(response.data.data)
              console.log(response.data);
              setLoading(false);
          })
          .catch((error) => {
              console.log(error)
              setLoading(false);
          });

      axios.get("https://rest.istanbulru.com/api/showDelSer")
          .then((response) => {
              setData(response.data.data)
              console.log(response.data);
              setLoading(false);
          })
          .catch((error) => {
              console.log(error)
              setLoading(false);
          });
  }, []);


    const [selectedCity,setSelectedCity] = React.useState("");
    const [salary,setSalary] = React.useState(0);
    /*const [selectedState,setSelectedState] = React.useState('');
      
    const handleChangeState = (event) => {
      setSelectedState(event.target.value);
    };*/
    const [blockId,setBlockId] = React.useState(0);

    const [ErrSelectedCity,setErrSelectedCity] = React.useState(false);
    const [errSalary,setErrSalary] = React.useState(false);


    const handleChangeCity=(event)=>{
        setSelectedCity(event.target.value);
    }
    const handleChangeSalary=(event)=>{
        setSalary(event.target.value);
    }

    const AddData=()=>{
      
      if(!salary || salary<0 )
        setErrSalary(true)
      else
        setErrSalary(false)
      
      if(!selectedCity)
        setErrSelectedCity(true)
      else
        setErrSelectedCity(false)

      if(salary && salary>0 && selectedCity)
      {
        setLoading(true)
        try {
          const response = axios.post('https://rest.istanbulru.com/api/addDelSer', {
            city_id:selectedCity,
            price:salary
          },{
              headers:{
                  'Content-Type': 'application/json',
                  'Authorization' : 'Bearer ' +token 
              }
          }
          ).then((response) => {
              setData(response.data.services);
              console.log(response.data)
              setLoading(false)
          }).catch((error) => {
            console.log(error)
            setLoading(false)
          });
        } catch (e) {
            throw e;
        }
      } 
    }

    const tuggleBlockData=()=>{
      setLoading(true);
      axios.get("https://rest.istanbulru.com/api/blockDelSer/"+blockId,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' +token 
        }
      })
          .then((response) => {
            setData(response.data.Data)
              console.log(response.data);
              setLoading(false);
              setOpen(false)
          })
          .catch((error) => {
              console.log(error)
              setLoading(false);
              setOpen(false)
          });
    }


    return(
      <Container>
        <Load run={loading} />
            <Row className="justify-content-center">
                {/*<Col className="input_item_admin" lg={3} md={4} sm={6} xs={12} >
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel style={{ color:"#E6392B" }} id="demo-simple-select-standard-label">{Lang==="Ar" ? ("الولاية") : Lang==="En"? ("state") : "состояние"}</InputLabel>
                        <Select
                            style={{ borderColor:"#E6392B" }} 
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={selectedState}
                            onChange={handleChangeState}
                            label="Age"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {state.map((item)=>{
                            return(<MenuItem  value={item} >{item}</MenuItem>)
                            })}
                        </Select>
                    </FormControl>
                  </Col>*/}
                <Col className="input_item_admin" lg={3} md={4} sm={6} xs={12} >
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel style={{ color:"#E6392B" }} id="demo-simple-select-standard-label">{Lang==="Ar" ? ("المدينة") : Lang==="En"? ("city") : "Город"}</InputLabel>
                        <Select
                            error={ErrSelectedCity}
                            style={{ borderColor:"#E6392B" }} 
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={selectedCity}
                            id="state"
                            onChange={handleChangeCity}
                            label="city"
                            >
                            {citis.map((item)=>{
                                return(<MenuItem value={item.id}>{item.name}</MenuItem>)
                            })}
                        </Select>
                </FormControl>
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField error={errSalary} onChange={handleChangeSalary} style={{ width: "100%" }} id="outlined-number"  type="number" label={Lang==="Ar" ? ("سعر خدمة التوصيل") : Lang==="En"? ("salary of delivery service") : "зарплата службы доставки"} variant="outlined" />
                </Col>
            </Row>
            <Row  className="justify-content-center" >
                <Col style={{ margin: "40px 0px" }}  >
                  {Lang === "Ar" ? ("  انقر فوق حفظ البيانات لإضافة خدمة التسليم إلى الجدول ") : Lang === "En" ? (" click save data to add delivary serve to table") : "нажмите «Сохранить данные», чтобы добавить доставку в таблицу"}<br/>
                    <Button onClick={()=>AddData()} className="App_button"><h5>{Lang==="Ar" ? ("حفظ البيانات") : Lang==="En"? ("save data") : "Начать покупки"}</h5></Button>    
                </Col>
            </Row>


            <Row className="justify-content-center" >
                <Col lg={10} md={12} >
                    <TableContainer component={Paper}>
                        <Table  aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} >{Lang === "Ar" ? (" المدينة ") : Lang === "En" ? ("city") : "город"}</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? (" السعر ") : Lang === "En" ? ("salary") : "зарплата"} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> {Lang === "Ar" ? (" تفعيل أو تعطيل الخدمة ") : Lang === "En" ? ("desable or enable") : "отключить или включить"} </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                data.map((item)=>{
                                  return(
                                    <StyledTableRow key={"name"}>
                                        <StyledTableCell component="th" scope="row">
                                            {item.city}
                                        </StyledTableCell>
                                        <StyledTableCell align="start">{ item.price }</StyledTableCell>
                                        <StyledTableCell align="start">
                                          <Button onClick={()=>{ setBlockId(item.id); setOpen(true) }  } variant={ item.blocked===0 ? ("") : ( "outline-dark" )} className={ item.blocked===0 ? ("") : ( "keyword_button" )}  >
                                            {
                                              item.blocked===0 ?
                                              (Lang === "Ar" ? (" تفعيل    ") : Lang === "En" ? ("enable") : "давать возможность"):
                                              (Lang === "Ar" ? ("إلغاء التفعيل    ") : Lang === "En" ? ("desable") : "запрещать")
                                            }
                                          </Button>
                                        </StyledTableCell>
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
              <DialogTitle>{Lang === "Ar" ? ("تفعيل خدمة التوصيل يعني إمكانية شرائها من قبل المستخدمين") : Lang === "En" ? ("Activating the delivery service means users can purchase it") : "Активация службы доставки означает, что пользователи могут ее приобрести."}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button className="App_button" onClick={()=>tuggleBlockData()}>{Lang === "Ar" ? (" تفعيل ") : Lang === "En" ? ("Activate") : "Активируйте"}</Button>
              </DialogActions>
            </Dialog>
        </Container>
    )
}
export default Delivery