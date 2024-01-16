import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function createData(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        {
          name: 'some think',
          salary: 10,
          quantity: 3,
        },
        {
          name: 'best coffee !!',
          salary: 20,
          quantity: 1,
        },
      ],
    };
  }
  
  function RowInTable(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const Lang=useSelector((state) => state.counter.language);
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="start">{row.calories}</TableCell>
          <TableCell align="start">{row.fat}</TableCell>
          <TableCell align="start">{row.carbs}</TableCell>
          <TableCell align="start">{row.protein}</TableCell>
          <TableCell align="start" > <Button href="" variant="outline-danger" className="keyword_button"  >change</Button> </TableCell>
          <TableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  > cancellation </Button></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                {Lang==="Ar" ? ("تفاصيل الطلب") : Lang==="En"? (" Order details ") : " Информация для заказа "} 
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>  {Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "} </TableCell>
                      <TableCell> {Lang==="Ar" ? ("السعر ") : Lang==="En"? (" price ") : " Цена "} </TableCell>
                      <TableCell align="start"> {Lang==="Ar" ? (" الكمية ") : Lang==="En"? (" quantity ") : " Количество "}  </TableCell>
                      <TableCell align="start"> {Lang==="Ar" ? (" المجموع ") : Lang==="En"? (" Total price ") : " Итоговая цена "}</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.history.map((historyRow) => (
                        <TableRow key={historyRow.name}>
                            <TableCell component="th" scope="row">
                            {historyRow.name}
                            </TableCell>
                            <TableCell>{historyRow.salary}</TableCell>
                            <TableCell align="start">{historyRow.quantity}</TableCell>
                            <TableCell align="start">
                            {Math.round(historyRow.quantity * historyRow.salary)}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };
  
  const rows = [
    createData('24/6/2024', 'working', 6, 240, 'With delivery ', 3.99),
    createData('24/6/2024', 'consoled', 9, 370, 'With delivery ', 499),
    createData('24/6/2024', 'ended',   16, 240, 'With delivery ', 3.79),
    createData('24/6/2024', 'ended',   3 , 670, 'No delivery ', 2.5),
    createData('24/6/2024', 'ended',   16, 490, 'No delivery ', 1.5),
  ];


const AdminRequests =()=>{
        const Lang=useSelector((state) => state.counter.language);
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
                            <InputLabel id="demo-simple-select-label">product</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={product}
                                label="product"
                                onChange={handleChangeProduct}
                            >
                                <MenuItem value={10}>sweets</MenuItem>
                                <MenuItem value={20}>drinks</MenuItem>
                                <MenuItem value={30}>other product</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={3} md={4} sm={12}>
                        <TextField onChange={handleChangeSalary} style={{ width: "100%" }} id="outlined-number" type="number" label="price" variant="outlined" />
                    </Col>
                    <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={3} md={4} sm={12}>
                        <TextField onChange={handleChangeQuantity} value={quantity} style={{ width: "100%" }} id="outlined-number" type="number" label="numper of product" variant="outlined" />
                    </Col>
                    <Col style={{ margin: "30px 0px" }} className="input_item_admin" lg={2} md={3} sm={10}>
                        <Button className="App_button">{Lang === "Ar" ? ("إضافة إلى الطلب") : Lang === "En" ? ("Add to request") : "Начать покупки"}</Button>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="input_item_admin">
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                            <TableCell>  {Lang==="Ar" ? ("اسم العنصر ") : Lang==="En"? (" name ") : " имя "} </TableCell>
                            <TableCell> {Lang==="Ar" ? ("السعر ") : Lang==="En"? (" price ") : " Цена "} </TableCell>
                            <TableCell align="start"> {Lang==="Ar" ? (" الكمية ") : Lang==="En"? (" quantity ") : " Количество "}  </TableCell>
                            <TableCell align="start"> {Lang==="Ar" ? (" المجموع ") : Lang==="En"? (" Total price ") : " Итоговая цена "}</TableCell>
                            <TableCell align="start"> {Lang==="Ar" ? (" إزالة ") : Lang==="En"? (" remove ") : " удалять "}</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    name product
                                    </TableCell>
                                    <TableCell>20$</TableCell>
                                    <TableCell align="start">10</TableCell>
                                    <TableCell align="start">
                                    200$
                                    </TableCell>
                                    <TableCell align="start" > <Button href="" variant="outline-danger" className="keyword_button"  > remove </Button> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    name product
                                    </TableCell>
                                    <TableCell>20$</TableCell>
                                    <TableCell align="start">10</TableCell>
                                    <TableCell align="start">
                                    200$
                                    </TableCell>
                                    <TableCell align="start" > <Button href="" variant="outline-danger" className="keyword_button"  > remove </Button> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    name product
                                    </TableCell>
                                    <TableCell>20$</TableCell>
                                    <TableCell align="start">10</TableCell>
                                    <TableCell align="start">
                                    200$
                                    </TableCell>
                                    <TableCell align="start" > <Button href="" variant="outline-danger" className="keyword_button"  > remove </Button> </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col style={{ margin: "30px 0px" }} >
                        <Button  className="App_button"><h5>{Lang === "Ar" ? ("حفظ البيانات") : Lang === "En" ? ("save data") : "Начать покупки"}</h5></Button>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="input_item_admin" l>
                    
                    
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell> {Lang==="Ar" ? (" تاريخ الطلب ") : Lang==="En"? (" date ") : "Дата подачи заявления"} </TableCell>
                                    <TableCell align="start"> {Lang==="Ar" ? (" حالة الطلب ") : Lang==="En"? (" state ") : "Статус заказа"} </TableCell>
                                    <TableCell align="start">  {Lang==="Ar" ? (" عدد العناصر ") : Lang==="En"? (" total ") : "Количество предметов"} </TableCell>
                                    <TableCell align="start"> {Lang==="Ar" ? ("  سعر الطلب ") : Lang==="En"? (" price ") : "Спроси цену"} </TableCell>
                                    <TableCell align="start"> {Lang==="Ar" ? (" حالة التوصيل ") : Lang==="En"? (" delivery ") : "Возможность доставки"} </TableCell>
                                    <TableCell align="start"> change</TableCell>
                                    <TableCell align="start"> cancellation </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <RowInTable key={row.name} row={row} />
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
        </Container>
    )
}
export default AdminRequests