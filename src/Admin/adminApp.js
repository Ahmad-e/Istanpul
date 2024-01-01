import {Outlet } from 'react-router-dom';
import AdminHeader from './adminHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import './style.css';



const AdminApp =()=>{
  
  const Lang=useSelector((state) => state.counter.language);

    return(
    <Container>
      <Row>
        <Col className={"admin_header_"+Lang} xlg={4} xs={2} >
          <AdminHeader/>
        </Col>
        <Col xlg={8} xs={10} >
          <Outlet/>
        </Col>
      </Row>
    </Container>
    )
}
export default AdminApp