import { Routes, Route, Link, Outlet } from 'react-router-dom';

import AdminHome from './adminHome';
import AdminHeader from './adminHeader'
const AdminApp =()=>{
    return(
    <div className="App" >
        <Routes>
          <Route path="home" element={<AdminHome />} />
          <Route path="header" element={<AdminHeader/>} />
        </Routes>
    </div>
    )
}
export default AdminApp