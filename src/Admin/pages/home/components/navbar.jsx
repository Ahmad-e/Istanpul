import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

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

export default function ResponsiveNavbar() {
        const [drawerOpen, setDrawerOpen] = React.useState(false);

        const toggleDrawer = () => {
                setDrawerOpen(!drawerOpen);
        };

        return (
                <ThemeProvider theme={theme}>
                        <Box sx={{ flexGrow: 1 }}>
                                <AppBar position="static">
                                        <Toolbar>
                                                <IconButton
                                                        size="large"
                                                        edge="start"
                                                        aria-label="menu"
                                                        sx={{ mr: 2 }}
                                                        onClick={toggleDrawer}
                                                >
                                                        <MenuIcon />
                                                </IconButton>
                                                <img
                                                        src={logo}
                                                        alt="Logo"
                                                        style={{ height: '40px', marginRight: '16px' }}
                                                />
                                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                        News
                                                </Typography>
                                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                                        <Button sx={{ color: '#000', ml: 2 }}>Home</Button>
                                                        <Button sx={{ color: '#000', ml: 2 }}>Employee</Button>
                                                        <Button sx={{ color: '#000', ml: 2 }}>Products</Button>
                                                </Box>
                                        </Toolbar>
                                </AppBar>
                                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                                        <List>
                                                <ListItem button>
                                                        <Button color="inherit">Home</Button>
                                                </ListItem>
                                                <ListItem button>
                                                        <Button color="inherit">Employee</Button>
                                                </ListItem>
                                                <ListItem button>
                                                        <Button color="inherit">Products</Button>
                                                </ListItem>
                                        </List>
                                </Drawer>
                        </Box>
                </ThemeProvider>
        );
}
