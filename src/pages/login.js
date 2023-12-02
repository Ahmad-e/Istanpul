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

const Login =()=>{

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
            <TextField error helperText="Incorrect entry." sx={{ m: 1, width: '25ch' }}  id="standard-basic" label="email" variant="standard" /><br/><br/><br/><br/>
            <a href="/regester" className="App_link" > I dont hav account </a><br/><br/>
            <Button href="/login" className="App_button"> submit </Button>
        </div>
    )
}
export default Login