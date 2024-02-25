import { useState , useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
//import { signUpService } from '../services/signUpSlice';
import { setToken , setAcc } from '../../../store'
import Load from '../../../components/load';
import axios from "axios";
import Alert from '@mui/joy/Alert';

const Singlin = () => {

    const dispatch = useDispatch();
    const Lang = useSelector((state) => state.counter.language);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const [loading,setLoading]=useState(false);
    const [city,setCity]=useState([]);
    const [selectedCity,setSelectedCity]=useState(0);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorCity, setErrorCity] = useState(false);

    const [message,setMessage] = useState(false);

    const [errorText, setErrorText] = useState('');

    const [file, setFile] = useState("");
    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            console.log(file);
        }
    };

    useEffect(() => {
        axios.get("https://rest.istanbulru.com/api/showCities")
            .then((response) => {
                setCity(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    const sent = async () => {
        
        const name = document.getElementById("Name").value;
        const email = document.getElementById("Email").value;
        const password = document.getElementById("Pass").value;
        const phone_no = phone;

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         if (!name) setErrorName(true);
         else setErrorName(false);

         if (selectedCity===0) setErrorCity(true);
         else setErrorCity(false);

         if (password.length < 6) setErrorPassword(true);
         else setErrorPassword(false);

         if (re.test(email)) setErrorEmail(false);
         else setErrorEmail(true);

        if (name && re.test(email) && password.length > 5 && phone_no && selectedCity!==0 ) {
            console.log("after send");

            var form = new FormData();
            //form.append('img_url', file);
            form.append('name', name);
            form.append('email', email);
            form.append('password', password);
            form.append('phone_no', phone_no);
            form.append('city_id', selectedCity);

            try {
                setLoading(true);
                const response = axios.post('https://rest.istanbulru.com/api/register',
                    form,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        if(response.data.status)
                        {
                            dispatch(setToken(response.data.access_token));
                            dispatch(setAcc(response.data.user_data.type_id));
                            console.log(response.data);
                        }
                        else
                            setMessage(true)
                        setLoading(false);

                    })
                    .catch((error) =>{
                        console.log(error)
                        setMessage(true)
                        setLoading(false);
                    });
            } catch (e) {
                throw e;
            }
        }
    };

    const handleChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <>
        <div dir="ltr" className="sign">
            <Load run={loading} />
            <TextField error={errorName} helperText="Incorrect entry." sx={{ m: 1, width: '25ch' }} id="Name" label={Lang === "Ar" ? ("الاسم") : Lang === "En" ? ("name") : "имя"} variant="standard" /><br />
            <TextField error={errorEmail} helperText="Incorrect entry." sx={{ m: 1, width: '25ch' }} id="Email" label={Lang === "Ar" ? ("الإيميل") : Lang === "En" ? ("email") : "электронная почта"} variant="standard" /><br />
            <FormControl error={errorPassword} sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">{Lang === "Ar" ? ("كلمة السر") : Lang === "En" ? ("password") : "пароль"}</InputLabel>
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
            <br /><br /><br />
            <PhoneInput
                id="phone"
                defaultCountry="ru"
                value={phone}
                onChange={(phone) => setPhone(phone)}
            />
            <br />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel style={{ color: "#E6392B" }} id="demo-simple-select-standard-label">{Lang === "Ar" ? ("المدينة") : Lang === "En" ? ("city") : "Город"}</InputLabel>
                <Select
                    error={errorCity}
                    style={{ borderColor: "#E6392B" }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedCity}
                    onChange={handleChange}
                    label="Age"
                >
                    {
                        city.map((item)=>{
                            return(
                            <MenuItem value={item.id}> { item.name } </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl><br />

            <Button onClick={() => sent()} className="App_button"> {Lang === "Ar" ? ("إرسال") : Lang === "En" ? ("submit") : "отправлять"} </Button><br /><br /><br />
            <a href="/login" className="App_link" > {Lang === "Ar" ? ("أنا أملك حساب") : Lang === "En" ? ("I have account") : "у меня есть аккаунт"} </a>

        </div>
        <br/>
        <div   style={{ display: "flex" , justifyContent: "center" }}>
        <div className={message ? (""):("d_n")}>
            <Alert  color="danger" size="md" variant="outlined"> 
                {Lang==="Ar" ? ("كلمة السر أو الرقم خطأ") : Lang==="En"? ("The password or number is wrong") : "Пароль или номер неправильный"}
            </Alert>
        </div></div>
        </>
    )
}
export default Singlin