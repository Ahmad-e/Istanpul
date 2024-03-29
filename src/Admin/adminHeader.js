import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';


import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import { useLocation } from 'react-router-dom';

const AdminHeader = () => {

    const Lang = useSelector((state) => state.counter.language);
    const user_id=useSelector((state) => state.counter.account);
    const currentURL = useLocation().pathname;

    console.log(currentURL)

    return (
        <div >
            <Nav.Link  
                className={(currentURL === "/admin/home" ? ("app_link bar_link App-text") : ("app_link bar_link"))+(user_id===3 ? (" ") : ( "d_n" ))} 
                eventKey={2} href="home">
                    <div className={user_id===3 ? (" ") : ( "d_n" )} >
                        <HomeRepairServiceIcon /><br /><span className="d_n_s" > {Lang === "Ar" ? (" البيانات ") : Lang === "En" ? ("home") : "дом"}</span>
                    </div>
            </Nav.Link>
            <Nav.Link className={currentURL === "/admin/adminProducts" ? ("app_link bar_link App-text") : ("app_link bar_link")} eventKey={2} href="adminProducts">
                <PostAddIcon /><br /><span className="d_n_s" > {Lang === "Ar" ? (" البضائع ") : Lang === "En" ? ("Products") : "Продукты"}</span>
            </Nav.Link>
            <Nav.Link className={currentURL === "/admin/adminkeyword" ? ("app_link bar_link App-text") : ("app_link bar_link")} eventKey={2} href="adminkeyword">
                <VpnKeyTwoToneIcon /><br /><span className="d_n_s" > {Lang === "Ar" ? (" الكلمات المفتاحية ") : Lang === "En" ? ("Keywords") : "Ключевые слова"}</span>
            </Nav.Link>
            <Nav.Link className={currentURL === "/admin/adminOffers" ? ("app_link bar_link App-text") : ("app_link bar_link")} eventKey={2} href="adminOffers">
                <TrendingDownIcon /><br /><span className="d_n_s" > {Lang === "Ar" ? (" التنزيلات ") : Lang === "En" ? ("Offers") : "Предложения"}</span>
            </Nav.Link>
            <Nav.Link className={currentURL === "/admin/adminAds" ? ("app_link bar_link App-text") : ("app_link bar_link")} eventKey={2} href="adminAds">
                <ViewQuiltRoundedIcon /><br /><span className="d_n_s" > {Lang === "Ar" ? (" الإعلانات ") : Lang === "En" ? ("advertisements") : "реклама"}</span>
            </Nav.Link>
            <Nav.Link className={currentURL === "/admin/delivery" ? ("app_link bar_link App-text") : ("app_link bar_link")} eventKey={2} href="delivery">
                <DeliveryDiningIcon />
                <br /><span className="d_n_s" > {Lang === "Ar" ? (" التوصيل ") : Lang === "En" ? ("Delivery") : "Доставка"}</span>
            </Nav.Link>
            <Nav.Link className={currentURL === "/admin/adminRequests" ? ("app_link bar_link App-text") : ("app_link bar_link")} eventKey={2} href="adminRequests">
                <ListAltIcon /><br /><span className="d_n_s" > {Lang === "Ar" ? (" الطلبات ") : Lang === "En" ? ("Requests") : "Запросы"}</span>
            </Nav.Link>
            <Nav.Link className={currentURL === "/admin/adminSales" ? ("app_link bar_link App-text") : ("app_link bar_link")} eventKey={2} href="adminSales">
                <PointOfSaleIcon /><br /><span className="d_n_s" > {Lang === "Ar" ? (" المبيعات ") : Lang === "En" ? ("Sales") : "Продажи"}</span>
            </Nav.Link>
            <Nav.Link className={currentURL === "/admin/adminSuggestion" ? ("app_link bar_link App-text") : ("app_link bar_link")} eventKey={2} href="adminSuggestion">
                <AnnouncementIcon /><br /><span className="d_n_s" > {Lang === "Ar" ? (" الشكاوي ") : Lang === "En" ? ("Suggestion") : "Предположение"}</span>
            </Nav.Link>
            <Nav.Link 
                className={(currentURL === "/admin/createEmployee" ? ("app_link bar_link App-text") : ("app_link bar_link"))+(user_id===3 ? (" ") : ( "d_n" ))} 
                eventKey={2} 
                href="createEmployee">
                    <div className={user_id===3 ? (" ") : ( "d_n" )}>
                        <PersonAddIcon /> <br /> <span className="d_n_s" > {Lang === "Ar" ? (" موظف جديد ") : Lang === "En" ? ("Create employee") : "Создать сотрудника"} </span>
                    </div>
            </Nav.Link>
            <Nav.Link 
                className={(currentURL === "/admin/adminForms" ? ("app_link bar_link App-text") : ("app_link bar_link"))+(user_id===3 ? (" ") : ( "d_n" ))} 
                eventKey={2} 
                href="adminForms">
                    <div className={user_id===3 ? (" ") : ( "d_n" )} >
                        <AddReactionIcon /><br /><span className="d_n_s" > {Lang === "Ar" ? (" طلبات التوظيف ") : Lang === "En" ? ("Employment") : "Работа"}</span>
                    </div>
            </Nav.Link>
        </div>
    )
}
export default AdminHeader