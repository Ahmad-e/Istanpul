import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from '../../../assets/images/LOGO.png';

import Order1 from '../../../assets/images/order1.jpg';
import Order2 from '../../../assets/images/order2.jpg';
import Order3 from '../../../assets/images/order3.jpg';


const CarouselItem =()=>{

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return(
        <Carousel interval={5000} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="carousel_img" src={Image} />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel_img" src={Order1} />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel_img" src={Order2}/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel_img" src={Order3} />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    )
}
export default CarouselItem ;