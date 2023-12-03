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
import { useSelector } from 'react-redux';


const Singlin =()=>{
    const Lang=useSelector((state) => state.counter.language);
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
        
        <div dir="ltr" className="sign">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">{Lang==="Ar" ? ("كلمة السر") : Lang==="En"? ("password") : "пароль"}</InputLabel>
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
            <TextField error helperText="Incorrect entry." sx={{ m: 1, width: '25ch' }}  id="standard-basic" label={Lang==="Ar" ? ("الاسم") : Lang==="En"? ("name") : "имя"} variant="standard" /><br/>
            <TextField error helperText="Incorrect entry." sx={{ m: 1, width: '25ch' }}  id="standard-basic" label={Lang==="Ar" ? ("الإيميل") : Lang==="En"? ("email") : "электронная почта"} variant="standard" /><br/><br/>
            <PhoneInput
                defaultCountry="ru"
                value={phone}
                onChange={(phone) => setPhone(phone)}
            />
            <br/>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel style={{ color:"#E6392B" }} id="demo-simple-select-standard-label">{Lang==="Ar" ? ("المدينة") : Lang==="En"? ("city") : "Город"}</InputLabel>
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
            <Button href="/regester" className="App_button"> {Lang==="Ar" ? ("إرسال") : Lang==="En"? ("submit") : "отправлять"} </Button><br/><br/><br/>
            <a href="/login" className="App_link" > {Lang==="Ar" ? ("أنا أملك حساب") : Lang==="En"? ("I have account") : "у меня есть аккаунт"} </a>
            
        </div>
    )
}
export default Singlin