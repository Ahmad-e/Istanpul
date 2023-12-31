import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';


const AdminHeader =()=>{

    const Lang=useSelector((state) => state.counter.language);

    return(
        <div className="" >
            <Nav.Link className="app_link bar_link " eventKey={2} href="createEmployee">{Lang==="Ar" ? (" موظف جديد ") : Lang==="En"? ("createEmployee") : "Запросы"}</Nav.Link>
            <Nav.Link className="app_link bar_link" eventKey={2} href="delivery">{Lang==="Ar" ? (" التوصيل ") : Lang==="En"? ("delivery") : "Запросы"}</Nav.Link>
            <Nav.Link className="app_link bar_link" eventKey={2} href="adminOffers">{Lang==="Ar" ? (" التنزيلات ") : Lang==="En"? ("Offers") : "Запросы"}</Nav.Link>
            <Nav.Link className="app_link bar_link" eventKey={2} href="adminProducts">{Lang==="Ar" ? (" البضائع ") : Lang==="En"? ("Products") : "Запросы"}</Nav.Link>
            <Nav.Link className="app_link bar_link " eventKey={2} href="adminRequests">{Lang==="Ar" ? (" الطلبات ") : Lang==="En"? ("Requests") : "Запросы"}</Nav.Link>
            <Nav.Link className="app_link bar_link " eventKey={2} href="adminSales">{Lang==="Ar" ? (" المبيعات ") : Lang==="En"? ("Sales") : "Запросы"}</Nav.Link>
        </div>
    )
}
export default AdminHeader