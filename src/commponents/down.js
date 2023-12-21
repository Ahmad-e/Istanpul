import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';
import logo from '../LOGO.png';
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
                                <svg fill="#eee"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 363.301 363.301" >
                                    <path d="M347.506,240.442c-7.91-9.495-16.899-18.005-25.592-26.235c-3.091-2.927-6.287-5.953-9.368-8.962
                                    c-8.845-8.648-9.167-11.897-2.164-21.72c4.845-6.771,9.982-13.551,14.95-20.108c4.506-5.949,9.166-12.101,13.632-18.273l0.917-1.269
                                    c8.536-11.811,17.364-24.024,22.062-38.757c1.22-3.887,2.501-9.607-0.428-14.39c-2.927-4.779-8.605-6.237-12.622-6.918
                                    c-1.987-0.337-3.96-0.383-5.791-0.383l-55.901-0.04l-0.462-0.004c-8.452,0-14.148,3.983-17.412,12.178
                                    c-3.116,7.83-6.539,16.168-10.445,24.096c-7.773,15.787-17.645,33.97-31.93,49.135l-0.604,0.645
                                    c-1.687,1.813-3.598,3.866-4.995,3.866c-0.214,0-0.447-0.041-0.711-0.124c-2.959-1.153-4.945-8.316-4.855-11.648
                                    c0.001-0.046,0.002-0.092,0.002-0.138l-0.039-64.61c0-0.224-0.016-0.446-0.045-0.668c-1.422-10.503-4.572-17.041-16.474-19.372
                                    c-0.316-0.063-0.639-0.094-0.961-0.094h-58.126c-9.47,0-14.688,3.849-19.593,9.61c-1.324,1.54-4.08,4.746-2.714,8.635
                                    c1.386,3.947,5.885,4.791,7.35,5.065c7.272,1.384,11.371,5.832,12.532,13.604c2.027,13.496,2.276,27.901,0.784,45.334
                                    c-0.416,4.845-1.239,8.587-2.595,11.784c-0.315,0.746-1.432,3.181-2.571,3.182c-0.362,0-1.409-0.142-3.316-1.456
                                    c-4.509-3.089-7.808-7.497-11.654-12.942c-13.084-18.491-24.065-38.861-33.575-62.288c-3.527-8.624-10.114-13.452-18.556-13.594
                                    c-9.276-0.141-17.686-0.209-25.707-0.209c-8.764,0-16.889,0.081-24.823,0.246C8.914,83.74,4.216,85.776,1.744,89.676
                                    c-2.476,3.903-2.315,9.03,0.479,15.236c22.366,49.723,42.645,85.876,65.755,117.228c16.193,21.938,32.435,37.123,51.109,47.784
                                    c19.674,11.255,41.722,16.727,67.402,16.727c2.911,0,5.921-0.071,8.956-0.213c14.922-0.727,20.458-6.128,21.158-20.657
                                    c0.333-7.425,1.145-15.212,4.795-21.853c2.304-4.184,4.452-4.184,5.158-4.184c1.36,0,3.046,0.626,4.857,1.799
                                    c3.248,2.12,6.033,4.96,8.316,7.441c2.149,2.357,4.274,4.738,6.401,7.12c4.59,5.141,9.336,10.456,14.294,15.497
                                    c10.852,11.041,22.807,15.897,36.538,14.843h51.252c0.109,0,0.219-0.004,0.328-0.011c5.107-0.337,9.53-3.17,12.135-7.772
                                    c3.227-5.701,3.162-12.974-0.174-19.46C356.718,251.867,351.808,245.601,347.506,240.442z" />
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