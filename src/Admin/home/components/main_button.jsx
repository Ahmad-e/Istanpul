import { Button } from '@mui/material';
import React from 'react';

const MainButton = ({ width, backgroundColor, title, onClick }) => {
        return (
                <Button
                        sx={{
                                width: width,
                                backgroundColor: backgroundColor, 
                                borderRadius: 2,
                                color: 'white',
                                fontFamily: 'Cairo',
                                m: 4.2,
                                '&:hover': {
                                        backgroundColor: '#D32F2F',
                                },
                        }}
                        onClick={onClick}
                >
                        {title}
                </Button>
        );
};

export default MainButton;
