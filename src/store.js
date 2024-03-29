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
        baket:Cookies.get('BaKet_') ? (JSON.parse(Cookies.get('BaKet_'))) : ([]),
        kinds:Cookies.get('kindArr'),
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
          //console.log("tessst")
          if(value.payload===1)
            window.location.href = '/search/*/*';
          if(value.payload===2)
            window.location.href = '/admin/adminProducts';
          if(value.payload===3)
            window.location.href = '/admin/home';
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
          status.baket=[];
          Cookies.remove('BaKet_');
          console.log( status.baket)
        },
        addProduct:(status,value)=>{
          //return
          var test=[];
          for(var i=0;i<status.baket.length;i++)
          {  
            if(JSON.parse(JSON.stringify(status.baket[i]))[0].id===value.payload[0].id)
              if(JSON.parse(JSON.stringify(status.baket[i]))[0].offer_id===value.payload[0].offer_id)
                {
                  test = JSON.parse(JSON.stringify(status.baket))
                  test[i][0].quantity=test[i][0].quantity+value.payload[0].quantity;
                  status.baket=test
                  Cookies.set('BaKet_',  JSON.stringify(status.baket), { expires: 70 });
                  console.log(test)
                  return
                }
          }


          status.baket=[...status.baket, value.payload];
          Cookies.set('BaKet_',  JSON.stringify(status.baket), { expires: 70 });
          console.log(status.baket)
        },
        setKinds:(status,value)=>{
          status.kinds=value.payload;
          Cookies.set('kindArr', value.payload, { expires: 70 });
        },
        logOut:(state)=>{
          state.token=null;
          state.account=null;
          Cookies.remove('TokeN_')
          Cookies.remove('acc_type')
          Cookies.remove('BaKet_')
          
          window.location.href = '/login';
        }
        
    },
  })
  export const { tuggleMode,setAcc,setToken,setLanguege,setBaket,addProduct,setKinds,logOut } = counterSlice.actions

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    signUpService: signUpServiceRaducer
  },
})