import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductCard from './product_card';
import imageCard from '../../../../assets/images/test.jpg'
import imageCard1 from '../../../../assets/images/camera.jpg'

const ProductCarousel = () => {
        const [currentPosition, setCurrentPosition] = useState(0);

        const handleNext = () => {
                setCurrentPosition((prevPosition) => prevPosition + 1);
        };

        const handlePrev = () => {
                setCurrentPosition((prevPosition) => Math.max(0, prevPosition - 1));
        };

        const titles = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6'];
        const images = [imageCard, imageCard1, imageCard, imageCard1, imageCard, imageCard1];
        const cards = titles.map((title, index) => <ProductCard key={index} title={title} image={images[index]} />);

        return (
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                        {/* Product Cards */}
                        {cards.slice(currentPosition, currentPosition + 4)}

                        {/* Back Button */}
                        {currentPosition > 0 && (
                                <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
                                        <ArrowBackIcon />
                                </IconButton>
                        )}

                        {/* Forward Button */}
                        {currentPosition < cards.length - 4 && (
                                <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
                                        <ArrowForwardIcon />
                                </IconButton>
                        )}
                </Box>
        );
};

export default ProductCarousel;
