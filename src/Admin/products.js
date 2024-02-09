import * as React from 'react';
import {useEffect} from 'react';
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
import { useSelector,useDispatch } from 'react-redux';
import {setKinds} from '../store';
import Textarea from '@mui/joy/Textarea';

import FormData from 'form-data'
import $ from "jquery";
import axios from "axios";

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

const AdminProducts = () => {
    const dispatch = useDispatch();
    const Lang = useSelector((state) => state.counter.language);
    const kinds = useSelector((state) => state.counter.kinds);
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
  
    const [selectedtype, setselectedType] = React.useState();
    const [name, setName] = React.useState('');
    const [disc, setDesc] = React.useState('');
    const [code, setCode] = React.useState('');
    const [Longdisc, setLongDesc] = React.useState('');
    const [quantity, setQuantity] = React.useState(0);
    const [salary, setSalary] = React.useState(0);
    const [sourceSalary, setSourceSalary] = React.useState(0);

    const [errSelectedtype, setErrselectedType] = React.useState(false);
    const [errName, setErrName] = React.useState(false);
    const [errDisc, setErrDesc] = React.useState(false);
    const [errCode, setErrCode] = React.useState(false);
    const [errLongdisc, setErrLongDesc] = React.useState(false);
    const [errQuantity, setErrQuantity] = React.useState(false);
    const [errsalary, setErrSalary] = React.useState(false);
    const [errSourceSalary, setErrSourceSalary] = React.useState(false);

    const handleChangeProductType = (event) => {
        setselectedType(event.target.value);
    };
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeCode = (event)=>{
        setCode(event.target.value);
    }
    const handleChangeDisc = (event) => {
        setDesc(event.target.value)
    }
    const handleChangeLongDisc = (event) => {
        setLongDesc(event.target.value)
    }
    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value)
    }

    const handleChangeSalary = (event) => {
        setSalary(event.target.value)
    }
    const handleChangeSourceSalary = (event) => {
        setSourceSalary(event.target.value)
    }
    const [file, setFile] = React.useState("");

    const handleFileChange = (e) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
        console.log(file);
      }
    };


    const [data,setData]=React.useState([]);
    const [keywords,setKeywords]=React.useState([]);
    useEffect(() => {
        console.log(kinds)
        axios.get("http://rest.istanbulru.com/api/showProducts")
        .then((response) => {
            setData(response.data.products);
            setKeywords(response.data.products_types)
        })
        .catch((error) => console.log(error));
    }, []);


    //add new product
    const addNewProduct=()=>{

        if(name==="")
            setErrName(true);
        if(code==="")
            setErrCode(true);
        if(disc!==true)
            setDesc(true);
        if(!selectedtype)
            setErrselectedType(true);
        if(quantity<0 || !quantity)
            setErrQuantity(true);
        if(!salary)
            setErrSalary(true);
        if(!sourceSalary)
            setErrSourceSalary(true);

        //if(name && code && selectedtype && disc!==true &&  quantity && salary && sourceSalary )
        {
            var form = new FormData();
            form.append('image',file);

            console.log(name , code , selectedtype , disc ,  quantity , salary , sourceSalary , form)
            try {
                const response = axios.post('https://rest.istanbulru.com/api/updateImg',
                {img_url:form},
                    {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                //setData(response.data.products);
                console.log(response);
                }).catch((error) => console.log(error));
            } catch (e) {
                    throw e;
            }
        }
        // this body to api **addProduct**
                    /*name:name,
                    type_id:selectedtype,
                    disc:disc,
                    long_disc:Longdisc,
                    quantity:quantity,
                    source_price:sourceSalary,
                    price:salary,
                    code:code,
                    img_url:form*/
        
    }

    $(document).ready(function () {
        $('#upload-file').change(function () {
            var filename = ($(this).val());
            $('#file-upload-name').html(filename);
            if (filename !== "") {
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

    return (
        <Container>
            <Row className="justify-content-center" >
                <Col className="input_item_admin" lg={3} md={4} sm={12} >
                    <TextField error={errName} style={{ width: "100%" }} id="outlined-basic" label={Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "} variant="outlined" onChange={handleChangeName} />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{Lang==="Ar" ? (" النوع ") : Lang==="En"? (" type ") : " Тип "}</InputLabel>
                        <Select
                            error={errSelectedtype}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedtype}
                            label={Lang==="Ar" ? (" النوع ") : Lang==="En"? (" type ") : " Тип "}
                            onChange={handleChangeProductType}
                        >
                            {
                                keywords.map((item)=>{
                                    return(
                                        <MenuItem value={item.id}>{item.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>

                </Col>
                <Col className="input_item_admin" lg={6} md={8} sm={12}>
                    <Textarea
                        minRows={2}
                        error={errDisc}
                        placeholder={Lang==="Ar" ? (" وصف المنتج ") : Lang==="En"? (" Discription ") : " Описание "}
                        size="md"
                        variant="outlined"
                        onChange={handleChangeDisc}
                    />
                </Col>
                <Col className="input_item_admin" lg={6} md={8} sm={12}>
                    <Textarea
                        minRows={2}
                        placeholder={Lang==="Ar" ? (" وصف المنتج التفصيلي ") : Lang==="En"? (" Long discription ") : " длинное описание "}
                        size="md"
                        variant="outlined"
                        onChange={handleChangeLongDisc}
                    />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12} >
                    <TextField error={errCode} style={{ width: "100%" }} id="outlined-basic" label={Lang==="Ar" ? ("اسم الكود ") : Lang==="En"? (" code ") : " code "} variant="outlined" onChange={handleChangeCode} />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField error={errQuantity} onChange={handleChangeQuantity} style={{ width: "100%" }} id="outlined-number" type="number" label={Lang==="Ar" ? (" الكمية ") : Lang==="En"? (" quantity ") : " Количество "} variant="outlined" />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField error={errsalary} onChange={handleChangeSalary} style={{ width: "100%" }} id="outlined-number" type="number" label={Lang==="Ar" ? ("سعر المبيع ") : Lang==="En"? (" Saling price ") : " цена продажи "} variant="outlined" />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField error={errSourceSalary} onChange={handleChangeSourceSalary} style={{ width: "100%" }} id="outlined-number" type="number" label={Lang==="Ar" ? ("سعر التكلفة ") : Lang==="En"? (" Cost price ") : " Себестоимость "} variant="outlined" />
                </Col>
                <Col className="input_item_admin" lg={12} sm={12}>
                    <div class="main-wrapper">
                        <div class="upload-main-wrapper">
                            <div class="upload-wrapper">
                                <input onChange={handleFileChange} type="file" id="upload-file" accept="image/*" />
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
                            <p id="file-upload-name"></p>
                        </div>
                    </div>
                </Col>
                <Col lg={12} xs={12} >
                    <CardItem id={0} imgURL={""} name={name} disc={disc} price={salary} />
                </Col>

            </Row>
            <Row>
                <Col style={{ margin: "30px 0px" }} >
                    <Button onClick={()=>addNewProduct()} className="App_button"><h5>{Lang === "Ar" ? ("حفظ البيانات") : Lang === "En" ? ("save data") : "Начать покупки"}</h5></Button>
                </Col>
            </Row>
            <Row>
                <Col lg={12} sm={12} >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} >{Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "}</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start">  {Lang==="Ar" ? (" النوع ") : Lang==="En"? (" type ") : " Тип "}</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start">  {Lang==="Ar" ? (" وصف المنتج ") : Lang==="En"? (" Discription ") : " Описание "}</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> {Lang==="Ar" ? (" الكمية ") : Lang==="En"? (" quantity ") : " Количество "} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> {Lang==="Ar" ? ("سعر المبيع ") : Lang==="En"? (" Saling price ") : " цена продажи "} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> {Lang==="Ar" ? ("سعر التكلفة ") : Lang==="En"? (" Cost price ") : " Себестоимость "} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start">  {Lang==="Ar" ? (" الأرباح ") : Lang==="En"? (" Profits ") : " Прибыль "}</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> {Lang === "Ar" ? (" حظر ظهور ") : Lang === "En" ? ("Block") : "запретить"} </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> {Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"} </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="start">{row.type_name}</StyledTableCell>
                                        <StyledTableCell align="start">{row.disc}</StyledTableCell>
                                        <StyledTableCell align="start">{row.quantity}</StyledTableCell>
                                        <StyledTableCell align="start">{row.price}</StyledTableCell>
                                        <StyledTableCell align="start">{row.source_price}</StyledTableCell>
                                        <StyledTableCell align="start">{row.price-row.source_price}</StyledTableCell>
                                        <StyledTableCell align="start"><Button onClick={handleClickOpenBlockDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" حظر ظهور ") : Lang === "En" ? ("Block") : "запретить"}</Button></StyledTableCell>
                                        <StyledTableCell align="start"><Button onClick={handleClickOpenChangeDialog} variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? (" تعديل ") : Lang === "En" ? ("change") : "изменять"}</Button></StyledTableCell>
                                    </StyledTableRow>
                                ))}
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
                <DialogTitle>{Lang === "Ar" ? ("  إيقاف العنصر ") : Lang === "En" ? ("Block product") : "Блокировать продукт"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {Lang === "Ar" ? (" حظر المنتج يعني إيقاف ظهور المنتج للزبائن و منع الزبائن من شرائه ") : Lang === "En" ? ("Banning a product means stopping the product from appearing to customers and preventing customers from buying it") : "Запретить продукт означает прекратить показ продукта покупателям и помешать покупателям его покупать."}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className="App_button" onClick={handleCloseBlockDialog}>{Lang === "Ar" ? (" حظر ظهور ") : Lang === "En" ? ("Block") : "запретить"}</Button>
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
                    <Row className="justify-content-center" >
                    <Col className="input_item_admin" lg={3} md={4} sm={12} >
                        <TextField style={{ width: "100%" }} id="outlined-basic" label={Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "} variant="outlined" onChange={handleChangeName} />
                    </Col>
                    <Col className="input_item_admin" lg={3} md={4} sm={12}>
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
                    <Col className="input_item_admin" lg={6} md={8} sm={12}>
                        <Textarea
                            minRows={2}
                            placeholder={Lang==="Ar" ? (" وصف المنتج ") : Lang==="En"? (" Discription ") : " Описание "}
                            size="md"
                            variant="outlined"
                            onChange={handleChangeDisc}
                        />
                    </Col>
                    <Col className="input_item_admin" lg={6} md={8} sm={12}>
                        <Textarea
                            minRows={2}
                            placeholder={Lang==="Ar" ? (" وصف المنتج التفصيلي ") : Lang==="En"? (" Long discription ") : " длинное описание "}
                            size="md"
                            variant="outlined"
                            onChange={handleChangeLongDisc}
                        />
                    </Col>
                    <Col className="input_item_admin" lg={3} md={4} sm={12}>
                        <TextField onChange={handleChangeQuantity} style={{ width: "100%" }} id="outlined-number" type="number" label={Lang==="Ar" ? (" الكمية ") : Lang==="En"? (" quantity ") : " Количество "} variant="outlined" />
                    </Col>
                    <Col className="input_item_admin" lg={3} md={4} sm={12}>
                        <TextField onChange={handleChangeSalary} style={{ width: "100%" }} id="outlined-number" type="number" label={Lang==="Ar" ? ("سعر المبيع ") : Lang==="En"? (" Saling price ") : " цена продажи "} variant="outlined" />
                    </Col>
                    <Col className="input_item_admin" lg={3} md={4} sm={12}>
                        <TextField onChange={handleChangeSourceSalary} style={{ width: "100%" }} id="outlined-number" type="number" label={Lang==="Ar" ? ("سعر التكلفة ") : Lang==="En"? (" Cost price ") : " Себестоимость "} variant="outlined" />
                    </Col>
                    <Col className="input_item_admin" lg={12} sm={12}>
                        <div class="main-wrapper">
                            <div class="upload-main-wrapper">
                                <div class="upload-wrapper">
                                    <input type="file" id="upload-file" accept="image/*" />
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
                                <p id="file-upload-name"></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} xs={12} >
                        <CardItem id={0} imgURL={""} name={name} disc={disc} price={salary} />
                    </Col>

                </Row>
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
export default AdminProducts