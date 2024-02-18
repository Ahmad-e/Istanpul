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
import { useDispatch, useSelector } from 'react-redux';
import { PhoneInput } from 'react-international-phone';

import { setToken , setAcc } from '../../../store'
import Load from '../../../components/load';
import axios from "axios";

const Login =()=>{
    const dispatch = useDispatch();
    const Lang=useSelector((state) => state.counter.language);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = useState(false);
    const [loading,setLoading]=useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [phone, setPhone] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const send =()=>{
        const password = document.getElementById("Pass").value;
        
        if(!phone)setErrorPhone(true);
        else setErrorPhone(false);

        if (password.length < 6) setErrorPassword(true);
        else setErrorPassword(false);

        if(password.length > 5 && phone)
        {
            setLoading(true);
            try {
                const response = axios.post('https://rest.istanbulru.com/api/login', {
                    phone_no:phone,
                    password:password
                }).then((response) => {
                    if(response.data.status)
                    {     
                        console.log(response.data);
                        setLoading(false);
                        dispatch(setToken(response.data.access_token));
                        dispatch(setAcc(response.data.user_data.type_id));
                    }

                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                });
                    
            } catch (e) {
                    throw e;
            }
            console.log("ok");
        }
    }
    return(
        <div dir="ltr" className="sign">
            <Load run={loading} />
            <br/>
            <PhoneInput
                error={errorPhone}
                defaultCountry="ru"
                value={phone}
                onChange={(phone) => setPhone(phone)}
            /><br/>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">{Lang==="Ar" ? ("كلمة السر") : Lang==="En"? ("password") : "пароль"}</InputLabel>
                <Input
                    id="Pass"
                    error={errorPassword}
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

            <Button onClick={()=>send()} className="App_button"> {Lang==="Ar" ? ("إرسال") : Lang==="En"? ("submit") : "отправлять"} </Button><br/><br/>
            <a href="/regester" className="App_link" > {Lang==="Ar" ? ("أنا لا أملك حساب") : Lang==="En"? ("I don't have an account") : "у меня нет аккаунта"} </a>
        </div>
    )
}
export default Login