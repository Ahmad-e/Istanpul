import Container from 'react-bootstrap/Container';
import {useEffect , useState} from 'react'
import HomePage from '../components/homePage'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardItem from '../../../components/card'
import { useSelector } from 'react-redux';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {


  //const color=useSelector((state) => state.counter.mode);
  const Lang = useSelector((state) => state.counter.language);
  const user_id=useSelector((state) => state.counter.account);
  const [ads,setAds] = useState([]);
  const [offer,setOffer] = useState([]);
  const [product,setProduct] = useState([]);
  const [productType,setProductType] = useState([]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    axios.get("https://rest.istanbulru.com/api/home")
        .then((response) => {
            console.log(response.data);
            setAds(response.data.ads);
            setOffer(response.data.top_offers);
            setProduct(response.data.top_products);
            setProductType(response.data.products_types);
        })
        .catch((error) => {
            console.log(error)
        });
}, []);

  return (
    <>
      <Container className="sectio" >
        <div className="row justify-content-center  d-flex align-items-center text-lg-start">
          <div className="box col-lg-4 col-md-5" >
            <h1> <span className="App-text">{Lang === "Ar" ? ("إسطنبول") : Lang === "En" ? ("Istanbul") : "Стамбул"}</span> <span className="gold-color i_font">{Lang === "Ar" ? ("شوب") : Lang === "En" ? ("shop") : "магазин"}</span>  </h1>
            <p style={{ fontSize: "large" }} className="opacity-75 mt-4">{Lang === "Ar" ? ("مرحباً بك في أفضل متجر إلكتروني في روسيا لبيع النتجات التركية , تمتع بتجربة تسوق فريدة من أجل اختيارات أفضل  ") : Lang === "En" ? ("Welcome to the best online store in Russia for selling Turkish products. Enjoy a unique shopping experience for better choices.") : "Добро пожаловать в лучший интернет-магазин России по продаже турецких товаров. Наслаждайтесь уникальным опытом покупок и сделайте лучший выбор."} </p>
            <div className="mt-5 mb-5">
              <Button href={ user_id===1 || user_id===2 || user_id===3 ? ("/search/*/*") : ("/regester")} className="App_button">{Lang === "Ar" ? ("ابدأ التسوق") : Lang === "En" ? ("GET STARTED") : "Начать покупки"}</Button>
            </div>
          </div>
          <div style={{ textAlign: "center" }} className="img-fluid col-lg-7 col-md-6 d-md-block">
            <HomePage />
          </div>
        </div>
      </Container>
          <Carousel interval={5000} activeIndex={index} onSelect={handleSelect}>
            {
              ads.map((item)=>{
                return(
                  <Carousel.Item>
                      <img className="carousel_img" src={item.img_url} />
                      <Carousel.Caption>
                      </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
      </Carousel>
      <Container>
        <div className="justify_content_between" >
          <span>

          </span>
          <span>
            {
              productType.map((item)=>{
                return(
                <Button href={"/search/*/"+item.id} variant="outline-danger" className="keyword_button" >{item.name}</Button>
                )
              })
            }
          </span>
          <span>
            <Button variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? ("عرض الكل") : Lang === "En" ? ("show all") : "Посмотреть все"}</Button>
          </span>

        </div>
        <Row>
          <h1 className="App-text">
            <br/>
            Top products
            <br/><br/>
          </h1>
        </Row>
        <Row className="justify-content-center ">
            {
              product.map((item)=>{
                return(
                  <Col lg={3} md={6} sm={12} >
                    <CardItem id={item.id} imgURL={item.img_url} name={item.name} disc={item.disc} price={item.price} />
                  </Col>
                )
              })
            }
        </Row>

        <Row>
          <h1 className="App-text">
            <br/>
            Top offers
            <br/><br/>
          </h1>
        </Row>
        <Row className="justify-content-center ">
          {
            offer.map((item)=>{
              return(
                <Col lg={3} md={6} sm={12} >
                  <CardItem id={item.product_id} imgURL={item.img_url} name={item.product_name} disc={item.disc} price={item.price} offer={item.percentage} />
                </Col>
              )
            })
          }

        </Row>

      </Container>
    </>
  )
}
export default Home