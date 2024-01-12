import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import StaticsCard from '../components/statics_card'
import ProductCarousel from '../components/product_carsoul'
import EmployeeTable from '../components/employee_table'
import MainButton from '../components/main_button'
import NavbarAdmin from '../components/navbar'

const HomePageAdmin = () => {
        return (
                <>
                        <NavbarAdmin />
               
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // height: '100vh',
                        backgroundColor: 'white',
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
                                        textAlign: 'end',
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

                        </Box>
                        <MainButton
                                title='Add Employee'
                                backgroundColor='#E6392B'
                                width='200px'
                        />
                        </Box>
                </>
        )
}

export default HomePageAdmin
