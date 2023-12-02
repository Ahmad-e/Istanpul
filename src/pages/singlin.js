import {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Singlin =()=>{

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      
    const [age, setAge] = useState('');
      
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return(
        
        <div className="sign">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl><br/>
            <TextField error helperText="Incorrect entry." sx={{ m: 1, width: '25ch' }}  id="standard-basic" label="name" variant="standard" /><br/>
            <TextField error helperText="Incorrect entry." sx={{ m: 1, width: '25ch' }}  id="standard-basic" label="email" variant="standard" /><br/><br/>
            <PhoneInput
                defaultCountry="ru"
                value={phone}
                onChange={(phone) => setPhone(phone)}
            />
            <br/>
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
            </FormControl><br/><br/>
            
            <Button href="/regester" className="App_button"> submit </Button><br/><br/><br/>
            <a href="/login" className="App_link" > I have account </a>
        </div>
    )
}
export default Singlin