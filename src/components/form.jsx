import axios from "axios";
import {useEffect,useState} from 'react';
import Load from './load';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/joy/Alert';
import Err401 from '../assets/SVGs/err401';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiAutocomplete: {
        defaultProps: {
          renderOption: (props, option, state, ownerState) => (
            <Box
              sx={{
                borderRadius: '8px',
                margin: '5px',
                [`&.${autocompleteClasses.option}`]: {
                  padding: '8px',
                },
              }}
              component="li"
              {...props}
            >
              {ownerState.getOptionLabel(option)}
            </Box>
          ),
        },
      },
    },
  });

const Form = () => {
    const acc=useSelector((state) => state.counter.account);
    const Lang=useSelector((state) => state.counter.language);
    const token=useSelector((state) => state.counter.token);
    const [age, setAge] = useState(0);
    const [selectedState,setSelectedState] = useState('');
    const [loading,setLoading]=useState(false);
    const [cities,setCities] = useState([])
    const [message,setMessage] = useState(false);
      
    const handleChangeState = (event) => {
      setSelectedState(event.target.value);
      console.log( selectedState )
    };
    const handleChangeCity = (event) => {
      setAge(event.target.value);
    };

    const [fileChange, setFileChange] = useState("");

    const handleChangeFileChange = (e) => {
        if (e.target.files) {
            setFileChange(e.target.files[0]);
        }
    };
    useEffect(() => {
      axios.get("https://rest.istanbulru.com/api/showCities")
          .then((response) => {
            setCities(response.data.data)
          })
          .catch((error) => {
              console.log(error)
          });
  }, []);

    const send =()=>{
      setLoading(true)
      var form = new FormData();
      form.append('cv', fileChange);
      try {
        const response = axios.post('https://rest.istanbulru.com/api/AddEmploymentRequest',
            form,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization":"Bearer "+token
                }
            })
            .then((response) => {
                //console.log(response.data)
                setLoading(false);
                setMessage(true)
            })
            .catch((error) =>{
                console.log(error)
                setLoading(false);
            });
        } catch (e) {
            throw e;
        }
    }
      
      const outerTheme = useTheme();


    if(acc!==1)
      return(
          <>
          <Err401 />
              <h4>
              {(Lang === "Ar" ? ("يجب عليك تسجيل الدخول أولا") : Lang === "En" ? ("you have to login first") : " сначала вам нужно войти в систему")}
              </h4>
          </>
      )

    return(
        <div>
          <Load run={loading} />
        <h4 style={{ padding: "38px 20%" }} >
        {Lang==="Ar" ? ("الآن ولفترة محدودة يمكنك الإنضمام لفريق عملنا بتخصصات مختلفة. ما عليك سوى ملء البيانات المرفقة هنا، وإرسال بياناتك، وسنقوم بمراجعتها") :
         Lang==="En"? ("Now, for a limited time, you can join our work team with different specializations. Just fill out the data attached here, send your data, and we will review it") :
          "Теперь, в течение ограниченного времени, вы можете присоединиться к нашей рабочей команде с разными специализациями. Просто заполните прилагаемые здесь данные, отправьте свои данные, и мы их рассмотрим"}
        {"   "}<SentimentSatisfiedAltIcon className="App-text" />
        </h4>
            <br/>
        {Lang==="Ar" ? ("قم بتحميل سيرتك الذاتية هنا بصيغة PDF") : Lang==="En"? ("Upload your CV here in PDF format") : "Загрузите сюда свое резюме в формате PDF."}<br/>

            <input
            onChange={handleChangeFileChange}
                accept='.pdf'
                className="btn btn-success App_button"
                type="file"
            />
            <br/><br/><br/><br/>
            <div style={{ display: "flex" , justifyContent: "center" }}>
                <hr style={{     width: "84%" }} />
            </div>
            <br/>
            {Lang==="Ar" ? ("أدخل تاريخ ميلادك هنا") : Lang==="En"? ("Enter your date of birth here") : "Введите дату рождения здесь"}<br/><br/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
            
            <br/><br/>
            {/** 
            <div style={{ display: "flex" , justifyContent: "center" }}>
                <hr style={{     width: "84%" }} />
            </div>
              {Lang==="Ar" ? ("أدخل جنسيتك أو محل  ولادتك هنا") : Lang==="En"? ("Enter your nationality or place of birth here") : "Введите здесь свою национальность или место рождения"}<br/><br/>
              <div style={{ display: "flex" , justifyContent: "center" }} >
                  <ThemeProvider theme={customTheme(outerTheme)}>
                      <Stack spacing={5} sx={{ width: 300 }}>
                          <CountrySelect />
                      </Stack>
                  </ThemeProvider>
              </div>
            <br/><br/>*/}
            <div style={{ display: "flex" , justifyContent: "center" }}>
                <hr style={{     width: "84%" }} />
            </div>
            {Lang==="Ar" ? ("أدخل المدينة التي تسكنها حالياً") : Lang==="En"? ("Enter the city you currently live in") : "Введите город, в котором вы сейчас проживаете"}<br/><br/>
            {/*<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel style={{ color:"#E6392B" }} id="demo-simple-select-standard-label">{Lang==="Ar" ? ("الولاية") : Lang==="En"? ("state") : "состояние"}</InputLabel>
                    <Select
                         style={{ borderColor:"#E6392B" }} 
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={selectedState}
                        onChange={handleChangeState}
                        label="Age"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {state.map((item)=>{
                          return(<MenuItem  value={item} >{item}</MenuItem>)
                        })}
                    </Select>
            </FormControl>*/}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel style={{ color:"#E6392B" }} id="demo-simple-select-standard-label">{Lang==="Ar" ? ("المدينة") : Lang==="En"? ("city") : "Город"}</InputLabel>
                    <Select
                         style={{ borderColor:"#E6392B" }} 
                        labelId="demo-simple-select-standard-label"
                        
                        id="state"
                        onChange={()=>handleChangeCity()}
                        label="Age"
                        >
                        {cities.map((item)=>{
                            return(<MenuItem> {item.name}</MenuItem>)
                        })}
                    </Select>
            </FormControl>
            <br/>
            <br/><br/>
            <div style={{ display: "flex" , justifyContent: "center" }}>
                <hr style={{     width: "84%" }} />
            </div>
            {Lang==="Ar" ? ("أنهي إدخال بياناتك من فضلك ثم إضغط على تقديم الطلب") : Lang==="En"? ("Please finish entering your data, then click Send the request") : "Пожалуйста, завершите ввод данных, затем нажмите Отправить запрос"}<br/><br/>
            <Button onClick={()=>send()} className="App_button">{Lang==="Ar" ? ("تقديم الطلب") : Lang==="En"? ("Send the request") : "Отправить запрос"}</Button><br/>

            <div   style={{ display: "flex" , justifyContent: "center" }}>
              <div className={message ? (""):("d_n")}>
              <br/><br/>
              <Alert  
                    variant="solid"
                    color="primary"
                >
                    {Lang==="Ar" ? ("تم إرسال الطلب بنجاح , سيتم معالجته فيما بعد") : 
                    Lang==="En"? ("The form was sent successfully, it will be processed later") :
                    "Сообщение успешно отправлено, оно будет обработано позже"}
                </Alert>
              </div>

            </div>

        </div>
    )
}
export default  Form

  function CountrySelect() {
    return (
      <Autocomplete
        id="country-customized-option-demo"
        disableCloseOnSelect
        getOptionLabel={(option) =>
          `${option.label} (${option.code}) +${option.phone}`
        }
        renderInput={(params) => <TextField {...params} label="Choose a country" />}
      />
    );
  }
  
