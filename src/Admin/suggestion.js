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


const AdminSuggestion =()=>{

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
      


    return(
        <Container>
            <Row className="justify-content-center" >
                <Col lg={12} sm={12} >
                <br/><br/>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} >Name</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> sugggestion </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> user data </StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor:"#E6392B" }} align="start"> delete </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >user data</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>  
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >user data</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>  
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >user data</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>  
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >user data</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>    
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >user data</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>  
                                <StyledTableRow key={"name"}>
                                    <StyledTableCell component="th" scope="row">
                                        {"alaa"}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">I cant add product to my basket </StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >user data</Button></StyledTableCell>
                                    <StyledTableCell align="start"><Button href="" variant="outline-danger" className="keyword_button"  >delete</Button></StyledTableCell>
                                </StyledTableRow>  
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
        </Container>
    )
}
export default AdminSuggestion