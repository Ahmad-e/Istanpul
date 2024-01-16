import { Box, Typography } from '@mui/material'
import React from 'react'
import StaticsCard from '../components/statics_card'
import ProductCarousel from '../components/product_carsoul'
import EmployeeTable from '../components/employee_table'
import Button from 'react-bootstrap/Button';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

      
const HomePageAdmin = () => {

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
                                        <EmployeeTable />
                                </Box>
                                <Button href="/admin/createEmployee" className="App_button"><h5>Add new</h5></Button>
                        </Box>
                                
                        </Box>
                </>
        )
}

export default HomePageAdmin
