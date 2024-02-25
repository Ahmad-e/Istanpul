import {Outlet } from 'react-router-dom';
import AdminHeader from './adminHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import './style.css';
import Err401 from '../assets/SVGs/err401'


const AdminApp =()=>{
  
  const Lang=useSelector((state) => state.counter.language);
  const user_id=useSelector((state) => state.counter.account);
  console.log(user_id)
  if(user_id===1 )
    return(
      <>
        <Err401 />
      </>
    )

  if(user_id===2 || user_id===3)
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