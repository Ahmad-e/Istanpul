import {useState,useEffect} from 'react';
import CardItem from './card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './style.css';
import Test from '../assets/images/LOGO.png'
import { useSelector,useDispatch } from 'react-redux';
import axios from "axios";
import { useParams } from "react-router-dom";
import {setKinds} from '../store';
import Err404 from '../assets/SVGs/err404'

function valuetext(value) {
    return `${value}°C`;
  }

const Search =()=>{
    const param = useParams();
    const Lang=useSelector((state) => state.counter.language);
    const dispatch = useDispatch();
    const [keywords,setKeyword]=useState([]);
    const [value, setValue] = useState([1, 900]);
    const [checked, setChecked] = useState(true);

    const [products,setProducts] = useState([]);
    const [offers,setOffers] = useState([]);


    const handleRangeChange = (event, newValue) => {
      setValue(newValue);
    };
      
    const handleChange = (event) => {
      window.location.href = '/search/*/'+event.target.value;
    };

    const send_data=()=>{
        var body
        if(param.name==="*" && param.type_id==='*')
            body={
                best:1
            }
        if(param.name!=="*")
            body={
                name:param.name
            }
        if(param.type_id!=="*")
            body={
                type_id:param.type_id
            }

        try {
                const response = axios.post('https://rest.istanbulru.com/api/searchProductsAndOffers',body)
            .then((response) => {
                    setOffers(response.data.offers)
                    setProducts(response.data.products)
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error);
                });
            } catch (e) {
                    throw e;
            }
    }


    useEffect(() => {
        axios.get("https://rest.istanbulru.com/api/showProductTypes")
        .then((response) => {
            dispatch(setKinds(response.data.types));
            setKeyword(response.data.types);
        })
        .catch((error) => console.log(error));

        send_data();
    }, []);




    if(products.length===0 && offers.length===0)
        return(
            <>
            <Err404 />
                <h4>
                    {(Lang === "Ar" ? (" لا بضائع لدينا بهذا الاسم  , حاول البحث مجدداُ") : Lang === "En" ? ("We have no goods with this name, try searching again. ") : " У нас нет товаров с таким названием, попробуйте поискать еще раз.")}
                </h4>
            </>
        )

    return(
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} md={9} sm={8} xs={12} >
                        <Row className="justify-content-center">
                        {
                            products.map((item)=>{
                                if(value[0]<item.price && value[1]>item.price  )
                                return(
                                    <Col className={checked ? ("") : (" d_n")} lg={4} md={6} sm={12} >
                                        <CardItem id={item.id} imgURL={item.img_url} name={item.name} disc={item.disc} price={item.price} />
                                    </Col>
                                        )
                                    })
                                }
                            {
                            offers.map((item)=>{
                                if(value[0]<item.new_price && value[1]>item.new_price )
                                return(
                                    <Col lg={4} md={6} sm={12} >
                                        <CardItem id={item.product_id} imgURL={item.img_url} name={item.product_name} disc={item.disc} price={item.old_price} offer={item.percentage} />
                                    </Col>
                                        )
                                    })
                                }

                        </Row>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={0} className="col_filter" >
                        <br/><br/>
                        <ToggleButton
                            className="mb-2 app_select_button"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            checked={checked}
                            value="1"
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            { checked ? (Lang === "Ar" ? (" العروض و البضائع") : Lang === "En" ? (" offers and products") : " предложения и продукты ") : (Lang === "Ar" ? (" العروض ") : Lang === "En" ? (" offers ") : " предложения ")}
                        </ToggleButton>
                        <Slider
                        style={{ color:"#E6392B" }}
                            min={1}
                            max={1000}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleRangeChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel style={{ color:"#E6392B" }} id="demo-simple-select-standard-label">kind</InputLabel>
                            <Select
                                style={{ borderColor:"#E6392B" }} 
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                onChange={handleChange}
                                label="Age"
                                >
                                <MenuItem value="*">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    keywords.map((item)=>{
                                        return(
                                            <MenuItem value={item.id}>{item.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
            </Container>
    )
}
export default Search