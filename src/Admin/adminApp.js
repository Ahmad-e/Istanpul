import {Outlet } from 'react-router-dom';
import AdminHeader from './adminHeader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';



const AdminApp =()=>{
    return(
    <div>
      <Row>
        <Col xlg={4} xs={3} >
          <AdminHeader/>
        </Col>
        <Col xlg={8} xs={9} >
          <Outlet/>
        </Col>
      </Row>
    </div>
    )
}
export default AdminApp