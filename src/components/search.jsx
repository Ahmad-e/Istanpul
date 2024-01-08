import {useState} from 'react';
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
function valuetext(value) {
    return `${value}°C`;
  }

const Search =()=>{

    const [value, setValue] = useState([10, 90]);
    const [checked, setChecked] = useState(false);

    const handleRangeChange = (event, newValue) => {
      setValue(newValue);
    };


    const [age, setAge] = useState('');
      
    const handleChange = (event) => {
      setAge(event.target.value);
    };


    return(
        <div >
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} md={9} sm={8} xs={12} >
                        <Row className="justify-content-center">
                            <Col lg={4} md={6} sm={12} >
                                <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
                            </Col>
                            <Col lg={4} md={6} sm={12} >
                                <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
                            </Col>
                            <Col lg={4} md={6} sm={12} >
                                <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
                            </Col>
                            <Col lg={4} md={6} sm={12} >
                                <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
                            </Col>
                            <Col lg={4} md={6} sm={12} >
                                <CardItem id={0} imgURL={Test} name="Istanpul website" disc="bestwebsite in the world" price="10000" />
                            </Col>
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
                            Checked
                        </ToggleButton>
                        <Slider
                        style={{ color:"#E6392B" }}
                            min={1}
                            max={100}
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
                                value={age}
                                onChange={handleChange}
                                label="Age"
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>candies</MenuItem>
                                <MenuItem value={20}>drinks</MenuItem>
                                <MenuItem value={30}>Local products</MenuItem>
                                <MenuItem value={30}>Imported products</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Search