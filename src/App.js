import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './commponents/style.css'
import './pages/style.css'
import './App.css';
import Header from './commponents/header'
import Home from './pages/home';
import Baket from './pages/baket';
import Search from './pages/search';
import Singlin from './pages/singlin';
import Login from './pages/login';
import Aboutus from './pages/aboutus';
import Favoret from './pages/favorit'
import Down from './commponents/down';
import Form from './pages/form'
import Requests from './pages/requests'
import AdminApp from './Admin/adminApp';
import { useSelector } from 'react-redux';
import AdminHome from './Admin/adminHome';
import AdminHeader from './Admin/adminHeader';
import Offers from './pages/offers'
function App() {
  const Lang=useSelector((state) => state.counter.language);
  
  document.querySelector("meta[name='theme-color']").content = "#f8f9fa";

  return (
    <div dir={ Lang==="Ar" ? ("rtl") :("ltr")} className="App" >
      <BrowserRouter >
      <Header/>
        <Routes>
          
            <Route index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="search" element={<Search />} />
            <Route path="login" element={<Login />} />
            <Route path="regester" element={<Singlin />} />
            <Route path="baket" element={<Baket />} />
            <Route path="favorite" element={<Favoret />} />
            <Route path="requests" element={<Requests />} />
            <Route path="form" element={<Form />} />
            <Route path="offers" element={<Offers />} />
            <Route path="admin" element={<AdminApp />} >
              <Route path="home" element={<AdminHome />} />
              <Route path="header" element={<AdminHeader/>} />
            </Route>
        </Routes>
        <Down/>
    </BrowserRouter>
  </div>
  );
}

export default App;
