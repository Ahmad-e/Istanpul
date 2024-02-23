

import React, {useState , useEffect} from 'react'
import Load from '../components/load';
import axios from "axios";
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
import Alert from '@mui/joy/Alert';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const Create_Employee =()=>{
    const Lang=useSelector((state) => state.counter.language);
    const token = useSelector((state) => state.counter.token);
    const [loading,setLoading]=useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const [selectedCity,setSelectedCity]=useState(0);
    const [city,setCity]=useState([]);
    const [open, setOpen] = useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


    const [errorName,setErrorName] = useState(false);
    const [errorEmail,setErrorEmail] = useState(false);
    const [errorPassword,setErrorPassword] = useState(false);
    const [errorCity, setErrorCity] = useState(false);

    const [hiddAlert,setHiddAlert] = useState(false);
    //const [textAlert, setTextAlert] = useState('');
    const [data,setData] = useState({
        "name":"",
        "password":"",
        "email":"",
        "phone":"",
    })



    useEffect(() => {
        axios.get("https://rest.istanbulru.com/api/showCities")
            .then((response) => {
                setCity(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);


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

        if (selectedCity===0) setErrorCity(true);
        else setErrorCity(false);
        
        if(name && re.test(email) && password.length > 5 && phone && selectedCity!==0 )
        {
            var form = new FormData();
            //form.append('img_url', file);
            form.append('name', name);
            form.append('email', email);
            form.append('password', password);
            form.append('phone_no', phone);
            form.append('city_id', selectedCity);

            try {
                setLoading(true);
                const response = axios.post('https://rest.istanbulru.com/api/registerEmp',
                    form,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization' : 'Bearer ' +token 
                        }
                    })
                    .then((response) => {
                        if(response.data.status)
                        {
                            console.log(response.data);
                            setData({
                                "password":password,
                                "name":name,
                                "email":email,
                                "phone":phone
                            })
                            setOpen(true)
                            setHiddAlert(false)
                        }
                        else
                            setHiddAlert(true)
                        setLoading(false);

                    })
                    .catch((error) =>{
                        console.log(error)
                        setHiddAlert(true)
                        setLoading(false);
                    });
            } catch (e) {
                throw e;
            }
        }
    }
      
    const handleChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return(
        <>
        <div>
        {Lang === "Ar" ? ("تقوم بإنشاء موظف جديد في النظام، احفظ البيانات عند الانتهاء من الإرسال ونقلها إلى الموظف لبدء العمل") : Lang === "En" ? ("You are create new employee in the system , save the data whene you end submit and take it to employee to start work") : "Вы создаете нового сотрудника в системе, сохраняете данные по окончании отправки и передаете их сотруднику для начала работы."}
        <Load run={loading} />
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
            </FormControl><br/>
            
            <Button onClick={()=>sent()} className="App_button"> {Lang==="Ar" ? ("إرسال") : Lang==="En"? ("submit") : "отправлять"} </Button>
            
        </div>
        <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>setOpen(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{Lang === "Ar" ? (" تم إنشاء الحساب بنجاح ") : Lang === "En" ? ("Account created successfully") : "Аккаунт успешно создан"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    name : { data.name }<br/>
                    email : { data.email}<br/>
                    password : { data.password }<br/>
                    phone : { data.phone }<br/>
                </DialogContentText>
                </DialogContent>
            </Dialog>

        <br/>
        <div   style={{ display: "flex" , justifyContent: "center" }}>
        <div className={hiddAlert ? (""):("d_n")}>
            <Alert  color="danger" size="md" variant="outlined"> 
                {Lang==="Ar" ? ("كلمة السر أو الرقم خطأ") : Lang==="En"? ("The password or number is wrong") : "Пароль или номер неправильный"}
            </Alert>
        </div></div>
        </>
    )
}
export default Create_Employee