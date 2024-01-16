import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import './components/style.css'
import './App.css';
import Header from './components/header'
import Home from './feature/home/pages/home';
import Baket from './feature/products/pages/baket';
import Search from './components/search';
import Singlin from './feature/auth/pages/singlin';
import Login from './feature/auth/pages/login';
import Aboutus from './feature/info/pages/aboutus';
import Favoret from './feature/products/pages/favorit';
import Suggestion from './/feature/info/pages/suggestion'
import Down from './components/footer';
import Form from './components/form'
import Requests from './feature/products/pages/requests'
import AdminApp from './Admin/adminApp';
import { useSelector } from 'react-redux';
import HomePageAdmin from './Admin/home/pages/home_page_admin';
import Create_Employee from './Admin/create_employee';
import Delivery from './Admin/delivery';
import AdminOffers from './Admin/offers';
import AdminProducts from './Admin/products';
import AdminRequests from './Admin/requests';
import Sales from './Admin/sales';
import AdminSuggestion from './Admin/suggestion';
import Offers from './feature/products/pages/offers';
import Keywords from './Admin/keywords';
import Forms from './Admin/forms';
import Ads from './Admin/ads';
import EmplyementPage from "./Admin/employee/pages/employement_page";


function App() {
  const Lang = useSelector((state) => state.counter.language);

  document.querySelector("meta[name='theme-color']").content = "#f8f9fa";

  return (
    <div dir={Lang === "Ar" ? ("rtl") : ("ltr")} className="App" >
      <BrowserRouter >
        <Header />
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
            <Route path="home" element={<HomePageAdmin />} />
            <Route path="createEmployee" element={<Create_Employee />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="adminOffers" element={<AdminOffers />} />
            <Route path="adminProducts" element={<AdminProducts />} />
            <Route path="adminRequests" element={<AdminRequests />} />
            <Route path="adminSales" element={<Sales />} />
            <Route path="adminSuggestion" element={<AdminSuggestion />} />
            <Route path="adminForms" element={<EmplyementPage />} />
            <Route path="adminkeyword" element={<Keywords />} />
            <Route path="adminAds" element={<Ads />} />
          </Route>
        </Routes>
        <Down />
      </BrowserRouter>
    </div>
  );
}

export default App;
