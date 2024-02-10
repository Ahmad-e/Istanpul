import Container from 'react-bootstrap/Container';
import HomePage from '../components/homePage'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Test from '../../../assets/images/test.jpg';
import CardItem from '../../../components/card'
import { useSelector } from 'react-redux';
import CarouselItem from '../components/carousel ';
import axios from "axios";


const Home = () => {


  //const color=useSelector((state) => state.counter.mode);
  const Lang = useSelector((state) => state.counter.language);

  const test = () => {

    /*
            axios.get("http://api.istanbulru.com/public/api/home")
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
                */
        try {
          const response = axios.post('https://rest.istanbulru.com/api/addProductType', {
            name:"type3"
          }).then((response) => {
            console.log(response.data);
          }).catch((error) => console.log(error));
          console.log( response);
        } catch (e) {
                throw e;
        }
    /*axios({
      method: 'POST',
      url: "http://rest.istanbulru.com/api/test",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: {
        "phone_no": "092378253400",
        "password": "555wer222"
      }
    }
    ).then((response) => {
      console.log(response.data);
    })
      .catch((error) => console.log(error));
    /*
 axios.post("http://rest.istanbulru.com/api/searchOffers")
   .then((response) => {
     console.log(response.data);
   })
   .catch((error) => console.log(error));
*/

  }

  return (
    <>
      <Container className="sectio" >
        <div className="row justify-content-center  d-flex align-items-center text-lg-start">
          <div className="box col-lg-4 col-md-5" >
            <h1> <span className="App-text">{Lang === "Ar" ? ("إسطنبول") : Lang === "En" ? ("Istanbul") : "Стамбул"}</span> <span className="gold-color i_font">{Lang === "Ar" ? ("شوب") : Lang === "En" ? ("shop") : "магазин"}</span>  </h1>
            <p style={{ fontSize: "large" }} className="opacity-75 mt-4">{Lang === "Ar" ? ("مرحباً بك في أفضل متجر إلكتروني في روسيا لبيع النتجات التركية , تمتع بتجربة تسوق فريدة من أجل اختيارات أفضل  ") : Lang === "En" ? ("Welcome to the best online store in Russia for selling Turkish products. Enjoy a unique shopping experience for better choices.") : "Добро пожаловать в лучший интернет-магазин России по продаже турецких товаров. Наслаждайтесь уникальным опытом покупок и сделайте лучший выбор."} </p>
            <div className="mt-5 mb-5">
              <Button onClick={() => test()} className="App_button">{Lang === "Ar" ? ("ابدأ التسوق") : Lang === "En" ? ("GET STARTED") : "Начать покупки"}</Button>
            </div>
          </div>
          <div style={{ textAlign: "center" }} className="img-fluid col-lg-7 col-md-6 d-md-block">
            <HomePage />
          </div>
        </div>
      </Container>
      <CarouselItem />
      <Container>
        <div className="justify_content_between" >
          <span>

          </span>
          <span>
            <Button href="/search" variant="outline-danger" className="keyword_button" >candies</Button>
            <Button href="/search" variant="outline-danger" className="keyword_button" >drinks</Button>
            <Button href="/search" variant="outline-danger" className="keyword_button"  >Local products</Button>
            <Button href="/search" variant="outline-danger" className="keyword_button"  >Imported products</Button>
          </span>
          <span>
            <Button variant="outline-danger" className="keyword_button"  >{Lang === "Ar" ? ("عرض الكل") : Lang === "En" ? ("show all") : "Посмотреть все"}</Button>
          </span>

        </div>
        <Row className="justify-content-center ">
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
          <Col lg={3} md={6} sm={12} >
            <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
          </Col>
        </Row>

      </Container>
    </>
  )
}
export default Home