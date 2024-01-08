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

import $ from "jquery";

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

function createData(name, calories, fat, carbs, protein, p, sp) {
    return { name, calories, fat, carbs, protein, p, sp };
}

const rows = [
    createData('Istanbul Item', "website", "best website in the world you can try that ", 24, 10, 5),
    createData('Istanbul Item', "website", "best website in the world you can try that ", 24, 10, 5),
    createData('Istanbul Item', "website", "best website in the world you can try that ", 24, 10, 5),
    createData('Istanbul Item', "website", "best website in the world you can try that ", 24, 10, 5),
    createData('Istanbul Item', "website", "best website in the world you can try that ", 24, 10, 5),
    createData('Istanbul Item', "website", "best website in the world you can try that ", 24, 10, 5),
    createData('Istanbul Item', "website", "best website in the world you can try that ", 24, 10, 5),
    createData('Istanbul Item', "website", "best website in the world you can try that ", 24, 10, 5),
];

const AdminProducts = () => {
    const Lang = useSelector((state) => state.counter.language);

    const [selectedtype, setselectedType] = React.useState('');
    const [name, setName] = React.useState('');
    const [disc, setDesc] = React.useState('');
    const [quantity, setQuantity] = React.useState(0);
    const [salary, setSalary] = React.useState(0);
    const [sourceSalary, setSourceSalary] = React.useState(0);

    const handleChangeProductType = (event) => {
        setselectedType(event.target.value);
    };
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeDisc = (event) => {
        setDesc(event.target.value)
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

    $(document).ready(function () {
        $('#upload-file').change(function () {
            var filename = ($(this).val());
            console.log(filename)
            $('#file-upload-name').html(filename);
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

    return (
        <Container>
            <Row className="justify-content-center" >
                <Col className="input_item_admin" lg={3} md={4} sm={12} >
                    <TextField style={{ width: "100%" }} id="outlined-basic" label="name of product" variant="outlined" onChange={handleChangeName} />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">type of product</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedtype}
                            label="type of product"
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
                        placeholder="discription"
                        size="md"
                        variant="outlined"
                        onChange={handleChangeDisc}
                    />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangeQuantity} style={{ width: "100%" }} id="outlined-number" type="number" label="numper of product" variant="outlined" />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangeSalary} style={{ width: "100%" }} id="outlined-number" type="number" label="price" variant="outlined" />
                </Col>
                <Col className="input_item_admin" lg={3} md={4} sm={12}>
                    <TextField onChange={handleChangeSourceSalary} style={{ width: "100%" }} id="outlined-number" type="number" label="source price" variant="outlined" />
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
            <Row>
                <Col style={{ margin: "30px 0px" }} >
                    <Button href="/regester" className="App_button"><h5>{Lang === "Ar" ? ("حفظ البيانات") : Lang === "En" ? ("save data") : "Начать покупки"}</h5></Button>
                </Col>
            </Row>
            <Row>
                <Col lg={12} sm={12} >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} >Name</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> Type </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> Discription </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> Quantity </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> Price </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> Source price </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> Profits </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> delete </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: "#E6392B" }} align="start"> change </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="start">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="start">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="start">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="start">{row.protein}0</StyledTableCell>
                                        <StyledTableCell align="start">60</StyledTableCell>
                                        <StyledTableCell align="start">40</StyledTableCell>
                                        <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                        <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >change</Button></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
        </Container>
    )
}
export default AdminProducts