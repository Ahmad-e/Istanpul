import { Box, Typography } from '@mui/material'
import React from 'react'
import StaticsCard from '../components/statics_card'
import ProductCarousel from '../components/product_carsoul'
import Button from 'react-bootstrap/Button';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

      function createData(name, email, section, phone) {
        return {
                name,
                email,
                section,
                phone,
                };
        }

        const rows = [
                createData('fares', 'f@app.com', 'ITE', +47382940583),
                createData('ahmad', 'a@app.com', 'ITE', +65546456646),
                createData('ghith', 'g@app.com', 'ITE', +65467868678),
        ];


const HomePageAdmin = () => {
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

        return (
                <>
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: 2,
                }}>
                        <Box sx={{
                                display: {
                                        xs: 'block',
                                        sm: 'flex',
                                        md: 'flex',
                                        xl: 'flex'
                                },
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                        }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer  components={['DateRangeCalendar']}>
                                                <DemoItem label="1 calendar">
                                                        <DateRangeCalendar onChange={(e)=>console.log(e)} calendars={1} />
                                                </DemoItem>
                                        </DemoContainer>
                                </LocalizationProvider>
                        </Box>
                        <Box sx={{
                                display: {
                                        xs: 'block',
                                        sm: 'flex',
                                        md: 'flex',
                                        xl: 'flex'
                                },
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                        }}>
                                <StaticsCard
                                        title='Total Customer'
                                        value='130'
                                />
                                <StaticsCard
                                        title='Total Profits of website'
                                        value='1,700 $'
                                />
                                <StaticsCard
                                        title='total Profits'
                                        value='3,843 $'
                                />
                                <StaticsCard
                                        title='Total Order Customer'
                                        value='2,420 $'
                                />
                        </Box>
                        <Box sx={{

                        }}>
                                <Typography sx={{
                                        color: '#E6392B',
                                        fontSize: {
                                                xs: 18,
                                                sm: 20,
                                                md: 24,
                                                lg: 28
                                        },
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        p: 2
                                }}>
                                        Best selling items
                                </Typography>

                                <Box sx={{
                                        display: {
                                                xs: 'block',
                                                sm: 'flex',
                                                md: 'flex',
                                                xl: 'flex'
                                        },
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                }}>
                                        <ProductCarousel />
                                </Box>

                        </Box>
                        <Box sx={{

                        }}>
                                <Typography sx={{
                                        color: '#E6392B',
                                        fontSize: {
                                                xs: 18,
                                                sm: 20,
                                                md: 24,
                                                lg: 28
                                        },
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 'bold',
                                        textAlign: 'end',
                                        p: 2
                                }}>
                                        Employees
                                </Typography>

                                <Box sx={{
                                        display: {
                                                xs: 'block',
                                                sm: 'block',
                                                md: 'flex',
                                                xl: 'flex'
                                        },
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                }}>
                                        <Box sx={{
                        width: '100%',
                        overflowX: 'auto',
                }}>
                        <Paper sx={{ width: '100%', mb: 2 , pr:5 , pl:5 }}>
                                <TableContainer>
                                        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                                                <TableHead>
                                                        <TableRow>
                                                                <TableCell padding="checkbox">
                                                                        
                                                                </TableCell>
                                                                <TableCell>Name</TableCell>
                                                                <TableCell>Email</TableCell>
                                                                <TableCell>Phone</TableCell>
                                                                <TableCell>block</TableCell>
                                                        </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                        {rows.map((row, index) => (
                                                                <TableRow
                                                                        hover
                                                                        role="checkbox"
                                                                        tabIndex={-1}
                                                                        key={index}
                                                                        sx={{ cursor: 'pointer' }}
                                                                >
                                                                        <TableCell padding="checkbox">
                                                                                
                                                                        </TableCell>
                                                                        <TableCell>{row.name}</TableCell>
                                                                        <TableCell>{row.email}</TableCell>
                                                                        <TableCell>{row.phone}</TableCell>
                                                                        <TableCell> <Button onClick={handleClickOpen} variant="outline-danger" className="keyword_button"  >block</Button> </TableCell>
                                                                </TableRow>
                                                                ))}
                                                        </TableBody>
                                                </Table>
                                        </TableContainer>
                                </Paper>
                        </Box>
                                </Box>
                                <Button href="/admin/createEmployee" className="App_button"><h5>Add new</h5></Button>
                        </Box>
                        <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                        >
                                <DialogTitle className="App-text "><h4>block employee</h4></DialogTitle>
                                        <DialogContent>
                                                <DialogContentText id="alert-dialog-slide-description">
                                                        If you block the employee, he will not be able to log in or perform any other operation in the system
                                                </DialogContentText>
                                        </DialogContent>
                                <DialogActions>
                                        <Button className="App_button" onClick={handleClose}>console</Button>
                                        <Button className="App_button" onClick={handleClose}>block</Button>
                                </DialogActions>
                        </Dialog>
                </Box>
                </>
        )
}

export default HomePageAdmin
