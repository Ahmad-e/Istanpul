import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../../assets/images/LOGO.png';

const theme = createTheme({
        components: {
                MuiAppBar: {
                        styleOverrides: {
                                root: {
                                        backgroundColor: '#fff',
                                },
                        },
                },
        },
});

export default function ButtonAppBar() {
        return (
                <ThemeProvider theme={theme}>
                        <Box sx={{ flexGrow: 1 }}>
                                <AppBar position="static">
                                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        {/* <IconButton
                                                                size="large"
                                                                edge="start"
                                                                aria-label="menu"
                                                                sx={{ mr: 2 }}
                                                        >
                                                                <MenuIcon />
                                                        </IconButton> */}
                                                        <img
                                                                src={logo}
                                                                alt="Logo"
                                                                style={{ height: '40px', marginRight: '16px' }}
                                                        />
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Button sx={{ color: '#000' }}>Home</Button>
                                                        <Button sx={{ color: '#000', ml: 2 }}>Employee</Button>
                                                        <Button sx={{ color: '#000', ml: 2 }}>Products</Button>
                                                </Box>
                                        </Toolbar>
                                </AppBar>
                        </Box>
                </ThemeProvider>
        );
}
