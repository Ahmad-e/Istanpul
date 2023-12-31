import { useSelector } from 'react-redux';
import Textarea from '@mui/joy/Textarea';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Suggestion = () => {

    const Lang=useSelector((state) => state.counter.language);


    return(
        <Container>
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
                    minRows={2}
                    placeholder={Lang==="Ar" ? ("أكتب هنا إقتراحاتك أو إنتقاداتك") : Lang==="En"? ("Write here your suggestions or criticism") : "Напишите сюда свои предложения или критику"}
                    size="lg"
                    variant="outlined"
                    />
                    <br/>
                    <Button className="App_button">{Lang==="Ar" ? ("أرسل الرسالة") : Lang==="En"? ("send message") : "Отправить сообщение"}</Button>
                    <br/><br/><br/><br/>
                </Col>

            </Row>
        </Container>
    )
}
export default  Suggestion 