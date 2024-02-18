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
import Err401 from '../../../assets/SVGs/err401'

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
  
  function Row(props) {
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
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
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
                      <TableCell align="right"> {Lang==="Ar" ? (" الكمية ") : Lang==="En"? (" quantity ") : " Количество "}  </TableCell>
                      <TableCell align="right"> {Lang==="Ar" ? (" المجموع ") : Lang==="En"? (" Total price ") : " Итоговая цена "}</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.history.map((historyRow) => (
                        <TableRow key={historyRow.name}>
                            <TableCell component="th" scope="row">
                            {historyRow.name}
                            </TableCell>
                            <TableCell>{historyRow.salary}</TableCell>
                            <TableCell align="right">{historyRow.quantity}</TableCell>
                            <TableCell align="right">
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

const Requests = () =>{
    const acc=useSelector((state) => state.counter.account);
    const Lang=useSelector((state) => state.counter.language);

    if(acc!==1)
    return(
        <>
        <Err401 />
            <h4>
                {(Lang === "Ar" ? ("يجب عليك تسجيل الدخول أولا") : Lang === "En" ? ("you have to login first") : " сначала вам нужно войти в систему")}
            </h4>
        </>
    )

    return(
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell> {Lang==="Ar" ? (" تاريخ الطلب ") : Lang==="En"? (" date ") : "Дата подачи заявления"} </TableCell>
                    <TableCell align="right"> {Lang==="Ar" ? (" حالة الطلب ") : Lang==="En"? (" state ") : "Статус заказа"} </TableCell>
                    <TableCell align="right">  {Lang==="Ar" ? (" عدد العناصر ") : Lang==="En"? (" total ") : "Количество предметов"} </TableCell>
                    <TableCell align="right"> {Lang==="Ar" ? ("  سعر الطلب ") : Lang==="En"? (" price ") : "Спроси цену"} </TableCell>
                    <TableCell align="right"> {Lang==="Ar" ? (" حالة التوصيل ") : Lang==="En"? (" delivery ") : "Возможность доставки"} </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <Row key={row.name} row={row} />
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default Requests ;