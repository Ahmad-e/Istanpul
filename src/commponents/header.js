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
import {setLanguege} from '../store';
import { useSelector,useDispatch } from 'react-redux';



const Header = () =>{
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [auth] = React.useState(true);
    const Lang=useSelector((state) => state.counter.language);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(anchorEl)
      };
      
    const setLanguage = (lang) => {
        console.log("changelanguage");
        dispatch(setLanguege(lang));
        setAnchorEl(null);
      };
    const handleClose=()=>{
        setAnchorEl(null);
    }
    


    return(
        <>
        <Navbar  collapseOnSelect expand="xxlg" className="bg-body-tertiary">
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
                    <Nav.Link className="app_link" href="/search">{Lang==="Ar" ? ("البحث") : Lang==="En"? ("Search") : "поиск"}</Nav.Link>
                    <Nav.Link className="app_link" href="/aboutus">{Lang==="Ar" ? ("معلومات عنا") : Lang==="En"? ("about us") : "о нас"}</Nav.Link>
                    <Nav.Link className="app_link" href="/favorite">{Lang==="Ar" ? (" المفضلة ") : Lang==="En"? ("favorite") : "любимый"}</Nav.Link>
                    <Nav.Link className="app_link" href="/offers">{Lang==="Ar" ? (" العروض ") : Lang==="En"? ("offers") : "Цены со скидкой"}</Nav.Link>
                    <Nav.Link className="app_link" href="/">{Lang==="Ar" ? (" أفضل المنتجات ") : Lang==="En"? (" best broduct") : "Лучшие продукты"}</Nav.Link>
                    <Nav.Link className="app_link" href="/">{Lang==="Ar" ? (" الحلويات ") : Lang==="En"? (" sweets ") : "сладости"}</Nav.Link>
                    <Nav.Link className="app_link" href="/">{Lang==="Ar" ? (" المشروبات ") : Lang==="En"? (" drinks ") : "напитки"}</Nav.Link>
                    <Nav.Link className="app_link" href="/">{Lang==="Ar" ? (" أنواع أُخرى ") : Lang==="En"? (" other kinds ") : "другие виды"}</Nav.Link>

                </Nav>
                <Nav>
                    <Nav.Link className="app_link" eventKey={2} href="/login">{Lang==="Ar" ? ("تسجيل دخول") : Lang==="En"? ("login") : "войти"}</Nav.Link>
                    <Button href="/regester" style={{ width:"130px" }} className="App_button">{Lang==="Ar" ? ("تسجيل حساب") : Lang==="En"? ("Regester") : "регистр"}</Button>
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
                            <MenuItem onClick={()=>setLanguage('En')}><img className="ALM" src="https://flagcdn.com/w320/gb.png"/> English </MenuItem>
                            <MenuItem onClick={()=>setLanguage('Ru')}><img className="ALM" src="https://flagcdn.com/ru.svg"/> Русский </MenuItem>
                            <MenuItem onClick={()=>setLanguage('Ar')}><img className="ALM" src="https://flagcdn.com/w320/sa.png"/> عربية </MenuItem>
                        </Menu>
                        </div>
                    )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
        <Row dir="ltr" className="justify-content-center">
            <Form className="d-flex search_form">
                <Form.Control
                placeholder="Search for items ... "
                className="text-search"
                aria-label="Search"
                />
                <Button  variant="outline-success" className="search_button"><SearchIcon /></Button>
            </Form>
        </Row>
        </>
    )
}
export default Header;