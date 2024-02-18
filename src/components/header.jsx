import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/images/LOGO.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './style.css'
import Badge from '@mui/material/Badge';
import {setLanguege , logOut ,setKinds} from '../store';
import { useSelector,useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useState , useEffect } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Header = () =>{
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [auth] = React.useState(true);
    const Lang=useSelector((state) => state.counter.language);
    const user_id=useSelector((state) => state.counter.account);
    const [open, setOpen] = React.useState(false);
    const [openDealog, setOpenDealog] = React.useState(false);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(anchorEl)
      };
      const [searchData,setSearchData] = useState("");
    const handelChangeSearch=(event)=>{
        setSearchData(event.target.value)
    }

    const setLanguage = (lang) => {
        console.log("changelanguage");
        dispatch(setLanguege(lang));
        setAnchorEl(null);
      };
    const handleClose=()=>{
        setAnchorEl(null);
    }
    const currentURL = useLocation().pathname;
    const [keywords,seKeywords]=useState([])
    useEffect(() => {
        axios.get("https://rest.istanbulru.com/api/showProductTypes")
        .then((response) => {
            dispatch(setKinds(response.data.types))
            seKeywords(response.data.types)
        })
        .catch((error) => console.log(error));
    }, []);

    
    return(
        <>
        <Navbar  sticky="top" collapseOnSelect expand="xxlg" className="bg-body-tertiary">
         <Container>
          <Navbar.Brand href="/">
          <img
              src="https://rest.istanbulru.com/api/getLogoImg"
              width="150"
              height="75"
              className="d-inline-block align-top"
              alt="logo"
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
                <Nav className={" flex-grow-1 pe-3 " + (user_id===2 || user_id===3 ? (" d_n") : (""))}>
                    
                    <Nav.Link className={ currentURL==="/search" ? ("app_link App-text") : ("app_link") } href="/search/*/*">{Lang==="Ar" ? (" بدء التسوق ") : Lang==="En"? ("Start shopping") : "Начать покупки"} </Nav.Link>
                    <Nav.Link className={ currentURL==="/offers" ? ("app_link App-text") : ("app_link") } href="/offers">{Lang==="Ar" ? (" العروض ") : Lang==="En"? ("offers") : "Цены со скидкой"}</Nav.Link>
                    <Nav.Link className={ currentURL==="/favorite" ? ("app_link App-text") : ("app_link") } href="/favorite">{Lang==="Ar" ? (" المفضلة ") : Lang==="En"? ("favorite") : "любимый"}</Nav.Link>
                    <Nav.Link className={ currentURL==="/search/*/*" ? ("app_link App-text") : ("app_link") } href="/search/*/*">{Lang==="Ar" ? (" أفضل المنتجات ") : Lang==="En"? (" best broduct") : "Лучшие продукты"}</Nav.Link>
                    <Nav.Link className="app_link" onClick={() => setOpen(!open)}>{Lang==="Ar" ? (" منتجاتنا ") : Lang==="En"? ("Our products") : "Наши продукты"} {"    "} {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Nav.Link>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <ul>
                            {
                                keywords.map((item)=>{
                                    return(
                                        <Nav.Link className="app_link" href={"/search/*/"+item.id}> {item.name} </Nav.Link>
                                    )
                                })
                            
                            }
                        </ul>
                    </Collapse>
                    <Nav.Link className="app_link" href="/aboutus">{Lang==="Ar" ? ("معلومات عنا") : Lang==="En"? ("about us") : "о нас"}</Nav.Link>
                    <Nav.Link className={ currentURL==="/requests" ? ("app_link App-text") : ("app_link") } eventKey={2} href="/requests">{Lang==="Ar" ? (" الطلبات ") : Lang==="En"? ("Requests") : "Запросы"}</Nav.Link>
                    <Nav.Link className={ currentURL==="/form" ? ("app_link App-text") : ("app_link") } eventKey={2} href="/form">{Lang==="Ar" ? (" انضم إلينا ! ") : Lang==="En"? ("join us") : "Присоединяйтесь к нам"}</Nav.Link>
                    <Nav.Link className={ currentURL==="/sendMessage" ? ("app_link App-text") : ("app_link") } eventKey={2} href="/sendMessage">{Lang==="Ar" ? (" أرسل إقتراح ") : Lang==="En"? ("Send a suggestion") : "Отправить предложение"}</Nav.Link>
                </Nav>
                <Nav>

                    <Nav.Link className={( currentURL==="/login" ? ("app_link App-text") : ("app_link"))+ ( user_id === 1 || user_id===2 || user_id===3  ? (" d_n") : (" "))  } eventKey={2} href="/login">{Lang==="Ar" ? ("تسجيل دخول") : Lang==="En"? ("login") : "войти"}</Nav.Link>
                    <Nav.Link onClick={()=>setOpenDealog(true)} className={"app_link" + ( user_id === 1 || user_id===2 || user_id===3  ? (" ") : (" d_n"))} eventKey={2} >{Lang==="Ar" ? ("تسجيل الخروج") : Lang==="En"? ("log out") : "выйти"}</Nav.Link>
                    <Button 
                        href="/regester" 
                        style={{ width:"130px" }} 
                        className={"App_button "+ ( user_id === 1 || user_id===2 || user_id===3  ? (" d_n") : (" ")) }
                    >
                        {Lang==="Ar" ? ("تسجيل حساب") : Lang==="En"? ("Regester") : "регистр"}
                    </Button>
                    <Nav.Link   className={"app_link " + (  user_id===1  ? ("") : (" d_n") ) } href="/baket">
                        <Badge  color="error" badgeContent={3} >
                        {/* <Badge color="secondary" badgeContent={100} color="error"> */}
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
                            <MenuItem onClick={()=>setLanguage('Ru')}><img className="ALM" src="https://flagcdn.com/w320/ru.png"/> Русский </MenuItem>
                            <MenuItem onClick={()=>setLanguage('Ar')}><img className="ALM" src="https://flagcdn.com/w320/sa.png"/> عربية </MenuItem>
                        </Menu>
                        </div>
                    )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>

        
            <Row  style={{ margin :"0px" }}  className="justify-content-center">
                <Form className="d-flex search_form">
                    <Form.Control
                    placeholder={Lang==="Ar" ? (" أكتب اسم أو نوع  أو صفة منتج ") : Lang==="En"? (" Write the name, type or description of a product ") : "Напишите название, тип или описание продукта"}
                    className={"text-search b_r_0 "+ (Lang==="Ar" ? ("b_r_br b_r_tr") : ("b_r_tl b_r_bl "))}
                    aria-label="Search"
                    onChange={handelChangeSearch}
                    />
                    <Button  
                        href={"/search/"+searchData+"/*"}
                        variant="outline-success" 
                        className={"search_button b_r_0 "+ (Lang==="Ar" ? ("b_r_tl b_r_bl ") : ("b_r_br b_r_tr"))}
                        >
                        <SearchIcon />
                    </Button>
                </Form>
            </Row>



            <Dialog
                open={openDealog}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>setOpenDealog(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{Lang === "Ar" ? (" هل أنت متأكد من تسجيل الخروج من الموقع ") : Lang === "En" ? ("Are you sure to log out of the site?") : "Вы уверены, что вышли из сайта?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className="App_button" onClick={()=>setOpenDealog(false)}>{Lang === "Ar" ? (" إلغاء  ") : Lang === "En" ? ("console") : "Отменить"}</Button>
                <Button className="App_button" onClick={()=>dispatch(logOut())}>{Lang==="Ar" ? ("تسجيل الخروج") : Lang==="En"? ("log out") : "выйти"}</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default Header;