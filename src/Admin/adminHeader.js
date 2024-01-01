import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';


import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';


const AdminHeader =()=>{

    const Lang=useSelector((state) => state.counter.language);

    return(
        <div >
            <Nav.Link className="app_link bar_link " eventKey={2} href="createEmployee"> <PersonAddIcon/> <br/> <span className="d_n_s" > {Lang==="Ar" ? (" موظف جديد ") : Lang==="En"? ("Create employee") : "Запросы"} </span> </Nav.Link>
            <Nav.Link className="app_link bar_link" eventKey={2} href="delivery"> <DeliveryDiningIcon/><br/><span className="d_n_s" > {Lang==="Ar" ? (" التوصيل ") : Lang==="En"? ("Delivery") : "Запросы"}</span></Nav.Link>
            <Nav.Link className="app_link bar_link" eventKey={2} href="adminOffers"> <TrendingDownIcon/><br/><span className="d_n_s" > {Lang==="Ar" ? (" التنزيلات ") : Lang==="En"? ("Offers") : "Запросы"}</span></Nav.Link>
            <Nav.Link className="app_link bar_link" eventKey={2} href="adminProducts"> <PostAddIcon/><br/><span className="d_n_s" > {Lang==="Ar" ? (" البضائع ") : Lang==="En"? ("Products") : "Запросы"}</span></Nav.Link>
            <Nav.Link className="app_link bar_link " eventKey={2} href="adminRequests"> <ListAltIcon/><br/><span className="d_n_s" > {Lang==="Ar" ? (" الطلبات ") : Lang==="En"? ("Requests") : "Запросы"}</span></Nav.Link>
            <Nav.Link className="app_link bar_link " eventKey={2} href="adminSales"> <PointOfSaleIcon/><br/><span className="d_n_s" > {Lang==="Ar" ? (" المبيعات ") : Lang==="En"? ("Sales") : "Запросы"}</span></Nav.Link>
        </div>
    )
}
export default AdminHeader