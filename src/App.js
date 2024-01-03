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
import Favoret from './pages/favorit';
import Suggestion from './pages/suggestion'
import Down from './commponents/down';
import Form from './pages/form'
import Requests from './pages/requests'
import AdminApp from './Admin/adminApp';
import { useSelector } from 'react-redux';
import AdminHome from './Admin/adminHome';
import Create_Employee from './Admin/create_employee';
import Delivery from './Admin/delivery';
import AdminOffers from './Admin/offers';
import AdminProducts from './Admin/products';
import AdminRequests from './Admin/requests';
import Sales from './Admin/sales';
import AdminSuggestion from './Admin/suggestion';
import Offers from './pages/offers';
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
            <Route path="sendMessage" element={<Suggestion />} />
            <Route path="requests" element={<Requests />} />
            <Route path="form" element={<Form />} />
            <Route path="offers" element={<Offers />} />
            <Route path="admin" element={<AdminApp />} >
            <Route path="home" element={<AdminHome />} />
              <Route path="createEmployee" element={<Create_Employee />} />
              <Route path="delivery" element={<Delivery />} />
              <Route path="adminOffers" element={<AdminOffers />} />
              <Route path="adminProducts" element={<AdminProducts />} />
              <Route path="adminRequests" element={<AdminRequests />} />
              <Route path="adminSales" element={<Sales />} />
              <Route path="adminSuggestion" element={<AdminSuggestion />} />
            </Route>
        </Routes>
        <Down/>
    </BrowserRouter>
  </div>
  );
}

export default App;
