import React from 'react'
import { Card, CardContent, CardActions, CardMedia, Box, Typography } from '@mui/material';
import imageCard from '../../../../assets/images/test.jpg'

const ProductCard = ({title , image}) => {
        return (
                <Card sx={{ width: 345, m: 2, textAlign: 'end' }}>
                        <CardMedia
                                sx={{ height: 140 }}
                                image={image}
                                title="green iguana"
                        />
                        <CardContent>
                                <Typography sx={{
                                        fontSize: {
                                                xs: 16,
                                                sm: 18,
                                                md: 20,
                                                lg: 22
                                        },

                                        fontFamily: 'Inter'
                                }}>
                                        {title}
                                </Typography>
                                <Typography sx={{
                                        fontSize: {
                                                xs: 16,
                                                sm: 18,
                                                md: 20,
                                                lg: 22
                                        },

                                        fontFamily: 'Inter',
                                        fontWeight: 'bold',
                                        color: '#E6392B'
                                }}>
                                        $5.99 / lb
                                </Typography>
                                <Typography sx={{
                                        fontSize: {
                                                xs: 12,
                                                sm: 14,
                                                md: 16,
                                                lg: 18
                                        },

                                        fontFamily: 'Inter',
                                        color: '#6D6D6D'
                                }}>
                                        Grown in San Juan Capistrano, CA
                                </Typography>
                              
                                        <Typography sx={{
                                                fontSize: {
                                                        xs: 16,
                                                        sm: 18,
                                                        md: 20,
                                                        lg: 22
                                                },
                                                fontWeight: 'bold',
                                                fontFamily: 'Inter',

                                        }}>
                                                total selling :  1344 
                                        </Typography>
                                     
                        </CardContent>
                        <CardActions>
                        </CardActions>
                </Card>
        )
}

export default ProductCard
