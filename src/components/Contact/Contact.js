import React from 'react';
import { Container,Row,Col} from "reactstrap";
import { RiHome8Line } from "react-icons/ri"
import { GiVibratingSmartphone } from "react-icons/gi"
import { AiOutlineMail } from "react-icons/ai";
import './Contact.css';
import Form from '../Form/Form';
const Contact = () => {
    return ( <section id='contact' className='contact-section'>
               <Container>
                   <Row>
                       <Col lg='12' className='mb-5'>
                           <h2> Get In Touch </h2>
                       </Col>
                       <Col lg='6' md='6'>
                           <div className="contact-container d-flex align-items-center gap-5"> 
                            <div className="single-box ">
                                <h5> <span> <RiHome8Line/> </span> Address </h5>
                                <p> Kathalbagan,Dhaka-1205,Bangladesh </p>
                            </div>
                            <div className="single-box ">
                                <h5> <span> <GiVibratingSmartphone/> </span> Phone </h5>
                                <p> +8801615951638 </p>
                            </div>
                           </div>
                           <div className="contact-container d-flex align-items-center gap-5">
                           <div className="single-box ">
                                <h5> <span> <AiOutlineMail/> </span>  email </h5>
                                <p> xyz@gmail.com </p>
                            </div>
                            <div className="single-box ">
                                <h5> <span> <AiOutlineMail/> </span>  email </h5>
                                <p> xyz@gmail.com </p>
                            </div>
                           </div>
                       </Col>
                       <Col lg='6' md='6'>
                          <Form/>
                       </Col>
                   </Row>
               </Container>
    </section>
        
    );
};

export default Contact;