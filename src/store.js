import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import signUpServiceRaducer from './feature/auth/services/signUpSlice';


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        url:"",
        mode:Cookies.get('color_mode_'),
        account:parseInt(Cookies.get('acc_type')),
        token:Cookies.get('TokeN_'),
        language:Cookies.get('Lang_'),
        baket:Cookies.get('BaKet_'),
    },
    reducers: {
      tuggleMode: (state) => {
        if(state.mode==="dark")
        {
            state.mode="light";
            Cookies.set('color_mode_', 'light', { expires: 70 });
        }
        else
        {
            state.mode="dark";
            Cookies.set('color_mode_', 'dark', { expires: 70 });
            
        }
        
        },
        setAcc: (state,value) => {
          Cookies.set('acc_type', value.payload, { expires: 70 });
          state.account=value.payload;
          console.log("tessst")
          if(value.payload===1 || value.payload===2)
            window.location.href = '/profile';
          if(value.payload===0)
            window.location.href = '/';
          if(value.payload===3)
            window.location.href = '/admin';
        },
        setToken:(status,value) => {
          status.token=value.payload;
          Cookies.set('TokeN_', value.payload, { expires: 70 });
          console.log(value.payload)
        },
        setLanguege:(status,value)=>{
          status.language=value.payload;
          Cookies.set('Lang_', value.payload, { expires: 70 });
          console.log(value.payload)
        },
        setBaket:(status,value)=>{
          status.baket=value.payload;
          Cookies.set('BaKet_', value.payload, { expires: 70 });
          console.log(value.payload)
        },
        addProduct:(status,value)=>{
          var i=status.baket;
          i.push(value.payload)
          status.baket=i
          Cookies.set('BaKet_',  i, { expires: 70 });
          console.log(i)
        }
        
    },
  })
  export const { tuggleMode,setAcc,setToken,setLanguege,setBaket,addProduct } = counterSlice.actions

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    signUpService: signUpServiceRaducer
  },
})