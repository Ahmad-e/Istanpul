import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';
import logo from '../assets/images/LOGO.png';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import {useState} from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Down = () =>{
    const color = useSelector((state) => state.counter.mode);
    const [coped,setCoped] = useState (false);
    /*function test (){
        setCoped(true);
        const textarea = document.createElement("textarea");
        textarea.value = "+7 918 679-31-15";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }*/

    return(
        
        <div dir={"ltr"} className="contact mt-5 p-5">
            <Container className="contact-container d-flex justify-content-between">
                <div className="mb-3">
                    <h2 className="logo text-start ">
                    { color === "light" ? (<img
                        alt="Samco"
                        src={logo}
                        width="160"
                        height="80"
                        className="d-inline-block align-top"
                        />) :
                    (<img
                        alt="Samco"
                        src={logo}
                        width="160"
                        height="80"
                        className="d-inline-block align-top"
                        />)}
                    </h2>
                    <div className="text2" >info@istanbulru.com</div>
                    <div className="text3" > +7 918 679-31-15 </div><br/>
                        <a href="https://www.kobinet.com.tr/" target="_blank" class="market-btn apple-btn" role="button">
                            <span class="market-button-subtitle">Download on the</span>
                            <span class="market-button-title">App Store</span>
                        </a>
                        <br/>
                        <a href="https://www.kobinet.com.tr/" target="_blank" class="market-btn google-btn" role="button">
                            <span class="market-button-subtitle">Download on the</span>
                            <span class="market-button-title">Google Play</span>
                        </a>
                    </div>
                    <div className="d-flex flex-column mt-lg-4 justify-content-center align-items-center">
                        <h4></h4>
                        <ul className="social mt-3 d-flex align-items-center justify-content-center">
                            
                                <a href="" class="facebook">
                                    <svg viewBox="0 0 576 512" >
                                        <path fill="#eee" d="m545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9v-116.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9h-58.9c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5 48.7 69.9 117.3 107.8 179.7 107.8 37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"/>
                                    </svg>
                                </a>
                            
                                
                                <a href="https://instagram.com/istanbul.krd" class="instagram">
                                    <InstagramIcon  style={{ fill: "white" }} />
                                </a>
                                <a  class="twitter">
                                    <WhatsAppIcon style={{ fill: "white" }}/>
                                </a>
                                <a href="https://instagram.com/istanbul.krd" class="telegram">
                                    <TelegramIcon  style={{ fill: "white" }} />
                                </a>
                                
                        </ul>
                    </div>
            </Container>
            <Col className="center">
            
                developed by <Nav.Link style={{ display :"inline" }} variant="link" href="mailto:homseahmad07@gmail.com" > Eng.Ahmad</Nav.Link>
            </Col>
            
        </div>
    )
}
export default Down