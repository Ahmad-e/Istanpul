

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


const Create_Employee =()=>{
    const Lang=useSelector((state) => state.counter.language);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const [errorName,setErrorName] = useState(false);
    const [errorEmail,setErrorEmail] = useState(false);
    const [errorPassword,setErrorPassword] = useState(false);
    const sent = () =>{
        const name = document.getElementById("Name").value;
        const email = document.getElementById("Email").value;
        const password = document.getElementById("Pass").value;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!name)
            setErrorName(true)
        else
            setErrorName(false)

        if(password.length<8)
            setErrorPassword(true)
        else
            setErrorPassword(false)

        if(re.test(email))
            setErrorEmail(false);
        else
            setErrorEmail(true)
        
        if(name && email && password && phone)
            console.log("tmam")
    }
      
    const [age, setAge] = useState('');
      
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return(
        <>
        <div>
            You are create new employee in the system , save the date whene you end submit and take it to employee to start work 
        </div>
        <div dir="ltr" style={{ display: "inline-block" }}>

            <TextField error={errorName} helperText="Incorrect entry." sx={{ m: 1, width: '25ch' }}  id="Name" label={Lang==="Ar" ? ("الاسم") : Lang==="En"? ("name") : "имя"} variant="standard" /><br/>
            <TextField error={errorEmail}  helperText="Incorrect entry." sx={{ m: 1, width: '25ch' }}  id="Email" label={Lang==="Ar" ? ("الإيميل") : Lang==="En"? ("email") : "электронная почта"} variant="standard" /><br/>
            <FormControl error={errorPassword} sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">{Lang==="Ar" ? ("كلمة السر") : Lang==="En"? ("password") : "пароль"}</InputLabel>
                <Input
                    id="Pass"
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
            <PhoneInput
                id="phone"
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
            </FormControl><br/>
            
            <Button onClick={()=>sent()} className="App_button"> {Lang==="Ar" ? ("إرسال") : Lang==="En"? ("submit") : "отправлять"} </Button>
            
        </div>
        </>
    )
}
export default Create_Employee