import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/style.css'
import './App.css';
import Header from './commponents/header'
import Home from './pages/home';
import Baket from './pages/baket';
import Search from './pages/search';
import Singlin from './pages/singlin';
import Login from './pages/login';
import Aboutus from './pages/aboutus';
import AdminApp from './Admin/adminApp';

import AdminHome from './Admin/adminHome';
import AdminHeader from './Admin/adminHeader'
function App() {
  return (
    <div className="App" >
      <BrowserRouter >
      <Header/>
        <Routes>
          
            <Route index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="search" element={<Search />} />
            <Route path="login" element={<Login />} />
            <Route path="regester" element={<Singlin />} />
            <Route path="baket" element={<Baket />} />
            <Route path="admin" element={<AdminApp />} >
              <Route path="home" element={<AdminHome />} />
              <Route path="header" element={<AdminHeader/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
