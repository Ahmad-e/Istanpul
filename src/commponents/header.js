import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../LOGO.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './style.css'
import Badge from '@mui/material/Badge';

const Header = () =>{

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [auth] = React.useState(true);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
      
    const handleClose = () => {
        setAnchorEl(null);
      };


    return(
        <>
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
         <Container>
          <Navbar.Brand href="/">
          <img
              src={Logo}
              width="150"
              height="75"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    <img
                        src={Logo}
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" flex-grow-1 pe-3">
                    <Nav.Link className="app_link" href="/search">search</Nav.Link>
                    <Nav.Link className="app_link" href="/aboutus">about us</Nav.Link>

                </Nav>
                <Nav>
                    <Nav.Link className="app_link" eventKey={2} href="/login">login</Nav.Link>
                    <Button href="/regester" className="App_button">Regester</Button>
                    <Nav.Link  className="app_link" href="/baket">
                        <Badge color="secondary" badgeContent={100} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </Nav.Link>
                    {auth && (
                        <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <TranslateIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><img className="ALM" src="https://flagcdn.com/us.svg"/>English</MenuItem>
                            <MenuItem onClick={handleClose}><img className="ALM" src="https://flagcdn.com/ru.svg"/>Русский</MenuItem>
                            <MenuItem onClick={handleClose}><img className="ALM" src="https://flagcdn.com/sy.svg"/>عربية </MenuItem>
                        </Menu>
                        </div>
                    )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
        <Row className="justify-content-center">
            <Form className="d-flex search_form">
                <Form.Control
                placeholder="Search for items ... "
                className="text-search"
                aria-label="Search"
                />
                <Button variant="outline-success" className="search_button"><SearchIcon /></Button>
            </Form>
        </Row>
        </>
    )
}
export default Header;