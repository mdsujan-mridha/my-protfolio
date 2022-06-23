import React from 'react';
import './Hero.css';
import { Container,Row,Col } from 'reactstrap';
import heroImg from "../pic/heroImg.png"
import './Hero.css';

const Hero = () => {
    return <section className='hero-section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero-content"> 
                   
                     <h5 className='mb-4'> Hi </h5>
                     <h2 className='hero-title mb-5'> I'm <span> Md.Sujan </span> </h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatem placeat. Eum, numquam molestias iste quas impedit aperiam. Eligendi, quo.</p>

                     <div className="mt-4 hero-btns d-flex align-items-center gap-4">
                     <a href="#"> <button className='hire-btn'> Hire me </button> </a>
                     <button className="contact-btn"> Contact  </button>
                     </div>
                    </div>
                </Col>
                <Col lg='6' md='6'> 
                
                <div className="hero-img">
                    <img src={heroImg} alt="" className='w-100'/>
                </div>
                </Col>
            </Row>
        </Container>
    </section> 
};

export default Hero;