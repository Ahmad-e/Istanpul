import { useSelector } from 'react-redux';
import Textarea from '@mui/joy/Textarea';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {useEffect,useState} from 'react';
import Load from '../../../components/load'
import Alert from '@mui/joy/Alert';

const Suggestion = () => {

    const Lang=useSelector((state) => state.counter.language);
    const token=useSelector((state) => state.counter.token);
    const [text ,setText] = useState();
    const [message,setMessage] = useState(false);
    const [loading,setLoading]=useState(false);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const send =()=>{
        setLoading(true)
        if(text)
        try {
            const response = axios.post('https://rest.istanbulru.com/api/addComplaint',{
                name:text
            },{
                headers:{
                    "Accept":"application/json",
                    "Authorization":"Bearer "+token
                }
            })
        .then((response) => {
            setMessage(true)
            setLoading(false)
            console.log(response.data)
            }).catch((error) => {
                console.log(error);
                setLoading(false)
            });
        } catch (e) {
                throw e;
        }
    }

    return(
        <Container>
            <Load run={loading} />
            <Row className="justify-content-center " >
                <Col lg={8} md={6} sm={10} >
                <br/><br/>
                    <div>
                    
                    {Lang==="Ar" ? ("يمكنك تقديم أي لإقتراحات , أفكار لشركتنا أو مشاكل واجهتها خلال استخدامك لمنصتنا فقط ارسل لنا رسالة و سنقوم بمراجعتها بإسرع وقت ممكن") : 
                    Lang==="En"? ("You can submit any suggestions, ideas for our company, or problems you encounter during your use of our platform. Just send us a message and we will review it as quickly as possible.") :
                     "Вы можете отправить любые предложения, идеи для нашей компании или проблемы, с которыми вы столкнулись во время использования нашей платформы. Просто отправьте нам сообщение, и мы рассмотрим его как можно быстрее"}
                    </div>
                    <br/>
                    <Textarea
                    onChange={handleChange}
                    id="message"
                    minRows={2}
                    placeholder={Lang==="Ar" ? ("أكتب هنا إقتراحاتك أو إنتقاداتك") : Lang==="En"? ("Write here your suggestions or criticism") : "Напишите сюда свои предложения или критику"}
                    size="lg"
                    variant="outlined"
                    />
                    <br/>
                    <Button onClick={()=>send()} className="App_button">{Lang==="Ar" ? ("أرسل الرسالة") : Lang==="En"? ("send message") : "Отправить сообщение"}</Button>
                    <br/><br/><br/><br/>
                </Col>
            </Row>
            <Row  className="justify-content-center " >
                <Col className={message ? (""):("d_n")} lg={3} md={6} sm={12} >
                <Alert  
                        variant="solid"
                        color="primary">
                    {Lang==="Ar" ? ("تم إرسال الرسالة بنجاح , سيتم معالجتها فيما بعد") : 
                    Lang==="En"? ("The message was sent successfully, it will be processed later") :
                     "Сообщение успешно отправлено, оно будет обработано позже"}
                </Alert>
                </Col>
            </Row>
        </Container>
    )
}
export default  Suggestion 