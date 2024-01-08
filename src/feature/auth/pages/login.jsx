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
import 'react-international-phone/style.css';
import { useSelector } from 'react-redux';
import { PhoneInput } from 'react-international-phone';

const Login =()=>{
    const Lang=useSelector((state) => state.counter.language);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const [phone, setPhone] = useState('');

    return(
        <div dir="ltr" className="sign">
            <br/>
            <PhoneInput
                defaultCountry="ru"
                value={phone}
                onChange={(phone) => setPhone(phone)}
            /><br/>
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
            </FormControl>
            <br/><br/><br/>

            <Button href="/login" className="App_button"> {Lang==="Ar" ? ("إرسال") : Lang==="En"? ("submit") : "отправлять"} </Button><br/><br/>
            <a href="/regester" className="App_link" > {Lang==="Ar" ? ("أنا لا أملك حساب") : Lang==="En"? ("I don't have an account") : "у меня нет аккаунта"} </a>
        </div>
    )
}
export default Login