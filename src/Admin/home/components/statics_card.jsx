import { Box, Typography } from '@mui/material'
import React from 'react'

const StaticsCard = ({ title, value }) => {
        return (
                <Box sx={{
                        backgroundColor: '#F0F0F0',
                        width: {
                                xs: '250px',
                                sm: '250px',
                                md: '300px',
                                lg: '350px'
                        },
                        display: 'block',
                        borderRadius: 2,
                        textAlign: 'end',
                        p: 3,
                        m: 2,
                        justifyContent: 'center'
                }}>
                        <Typography sx={{
                                fontSize: {
                                        xs: 10,
                                        sm: 12,
                                        md: 14,
                                        lg: 16
                                },
                                fontFamily: 'Ubuntu',
                                color: '#464748'
                        }}>
                                {title}
                        </Typography>
                        <Typography sx={{
                                fontSize: {
                                        xs: 20,
                                        sm: 22,
                                        md: 24,
                                        lg: 26
                                },
                                fontFamily: 'Ubuntu',
                                color: '#060B1E'
                        }}>
                                {value}
                        </Typography>
                </Box>
        )
}

export default StaticsCard
