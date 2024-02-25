import React ,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Load from '../../../components/load';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
//import fileDownload from 'js-file-download'

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

function createData(name, email, phone, national, address, information) {
        return {
                name,
                email,
                phone,
                national,
                address,
                information,
        };
}

const rows = [
        createData('fares', 'f@app.com', +47382940583, 'RS', 'syria - damascus'),
        createData('ahmad', 'a@app.com', +65546456646, 'RS', ' Uk - Liverpool'),
        createData('ghith', 'g@app.com', +65467868678, 'RS', 'US - New'),
];



export default function JoinEmployeeTable() {


        function handleDownloadCV(url, fileName){
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.responseType = "blob";
                xhr.onload = function(){
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(this.response);
                    var tag = document.createElement('a');
                    tag.href = imageUrl;
                    tag.download = fileName;
                    document.body.appendChild(tag);
                    tag.click();
                    document.body.removeChild(tag);
                }
                xhr.send();
                //var fileDownload = require('js-file-download');
                //fileDownload(data, 'filename.csv');
            }
            
        const downloadFile = (url) => {
                fetch(url)
                  .then(response => {
                    return response.blob();
                  })
                  .then(blob => {
                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'file.pdf'); // Set the desired file name here
                    document.body.appendChild(link);
                    link.click();
                    link.parentNode.removeChild(link);
                  })
                  .catch(error => {
                    console.error('Error downloading file:', error);
                  });
              };

        const Lang=useSelector((state) => state.counter.language);
        const [open, setOpen] = React.useState(false);

        const token = useSelector((state) => state.counter.token);
        const [loading,setLoading]=React.useState(false);
        const [idDelete,setIdDelete] = React.useState(0)
        const handleClickOpen = () => {
            setOpen(true);
        };
          
        const handleClose = () => {
            setOpen(false);
        };
        const [data,setData] = React.useState([]);
        React.useEffect(() => {
                setLoading(true);
                axios.get("https://rest.istanbulru.com/api/showEmploymentRequests",{
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization' : 'Bearer ' +token 
                    }
                })
                    .then((response) => {
                        console.log(response.data);
                        setData(response.data.data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log(error)
                        setLoading(false);
                    });
            }, []);

        const deleteForm=()=>{
                setLoading(true);
                axios.get("https://rest.istanbulru.com/api/deleteEmploymentRequest/"+idDelete,{
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization' : 'Bearer ' +token 
                    }
                })
                    .then((response) => {
                        console.log(response.data);
                        setData(response.data.data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log(error)
                        setLoading(false);
                    });
        }
    
        return (
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                        
                        {Lang === "Ar" ? ("هنا يتم عرض بيانات طلبات التوظيف التي أرسلها المستخدمون , يمكنك الحصول على بيانات الموظفين الجدد أو حذفها") :
                         Lang === "En" ? ("Here the data for employment applications sent by users is displayed. You can obtain or delete data for new employees") :
                          " Здесь отображаются данные по заявлениям о приеме на работу, отправленным пользователями. Вы можете получить или удалить данные о новых сотрудниках"}<br/><br/><br/><br/>
                        <Paper sx={{ width: '100%', mb: 2}}>
                                <TableContainer>
                                        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                                                <TableHead>
                                                        <TableRow sx={{
                                                                backgroundColor: '#E6392B'
                                                        }}>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>{Lang==="Ar" ? ("الاسم") : Lang==="En"? ("name") : "имя"}</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>{Lang==="Ar" ? ("الأيميل") : Lang==="En"? ("Email") : "Электронная почта"}</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>{Lang==="Ar" ? ("رقم الهاتف") : Lang==="En"? ("Phone") : "Номер телефона"}</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>{Lang==="Ar" ? ("العنوان") : Lang==="En"? ("Address") : "Адрес"}</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>{Lang==="Ar" ? ("معلومات") : Lang==="En"? ("Information") : "Информация"}</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>{Lang==="Ar" ? ("حذف") : Lang==="En"? ("delete") : "удалить"}</TableCell>
                                                        </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                        {data.map((row, index) => (
                                                                <TableRow
                                                                        hover
                                                                        role="checkbox"
                                                                        key={index}
                                                                        sx={{ cursor: 'pointer' }}
                                                                >
                                                                        <TableCell>{row.user_name}</TableCell>
                                                                        <TableCell>{row.email}</TableCell>
                                                                        <TableCell>{row.phone_no}</TableCell>
                                                                        <TableCell>{row.city}</TableCell>
                                                                        <TableCell>
                                                                                <Button
                                                                                        //onClick={() => handleDownloadCV(row.file_url,"test.pdf")}
                                                                                        href={row.file_url}
                                                                                        target="blank"
                                                                                        variant="outline-danger"
                                                                                        className="keyword_button"
                                                                                >
                                                                                        {Lang==="Ar" ? (" تنزيل الـCV") : Lang==="En"? ("download CV") : "скачать резюме"}
                                                                                </Button>
                                                                        </TableCell>
                                                                        <TableCell>
                                                                                <Button
                                                                                        onClick={()=>{setIdDelete(row.form_id); setOpen(true)}}
                                                                                        variant="outline-danger"
                                                                                        className="keyword_button" 
                                                                                >
                                                                                        {Lang==="Ar" ? ("حذف") : Lang==="En"? ("delete") : "удалить"}
                                                                                </Button>
                                                                        </TableCell>
                                                                </TableRow>
                                                        ))}
                                                </TableBody>
                                        </Table>
                                </TableContainer>
                        </Paper>
                        <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                                >
                                <DialogTitle>{Lang === "Ar" ? ("  حذف الطلب ") : Lang === "En" ? ("Delete request") : "Удалить запрос"}</DialogTitle>
                                <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                                {Lang === "Ar" ? (" هل أنت متأكد من عملية الحذف") : Lang === "En" ? ("are sure of the deleting process") : "уверены в процессе удаления"}
                                        </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                        <Button className="App_button" onClick={()=>deleteForm()}>{Lang === "Ar" ? (" حذف ") : Lang === "En" ? ("delete") : "удалить"}</Button>
                                </DialogActions>
                        </Dialog>
                </Box>
        );
}
