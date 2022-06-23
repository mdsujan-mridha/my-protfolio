import React, { useState } from "react";
import "./About.css";
import { Container, Row, Col } from "reactstrap";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import aboutImg from "../pic/heroImg.png";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
const About = () => {
  const[aboutFilter,setAboutFilter] = useState('ABOUT');
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            
            <h2> About Me </h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about-btns d-flex flex-column align-items-center">
              <button className={`about-btn ${aboutFilter === 'ABOUT'? 'about-btn-active': ''}`} onClick={()=>setAboutFilter('ABOUT')}>About me</button>
              <button className={`about-btn ${aboutFilter === 'EDUCATION'? 'about-btn-active': ''}`} onClick={()=>setAboutFilter('EDUCATION')}>Education</button>
              <button className={`about-btn ${aboutFilter === 'SKILSS'? 'about-btn-active': ''}`} onClick={()=>setAboutFilter('SKILSS')} >skills</button>
              <button className={`about-btn ${aboutFilter === 'ACHIEVEMENT'? 'about-btn-active': ''}`} onClick={()=>setAboutFilter('ACHIEVEMENT')} > Achievement </button>
            </div>
          </Col>
          <Col lg="8" md="9">

            {
              aboutFilter === 'ABOUT' &&  <div className="about_content-wrapper d-flex gap-5">
              <div className="about-img w-25">
                <img  src={aboutImg} alt="" />
              </div>
              <div className="about-content w-75">
                <h2> I'm Sujan </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  odio at cupiditate sapiente molestiae eaque facere
                  consequuntur ipsa consequatur deserunt!{" "}
                </p>
                <div className="social-links">
                  <h5 className="mb-3"> Contact With me </h5>
                  <span>
                  
                    <a href="#">
                    
                      <i>
                    
                        <BsFacebook />
                      </i>
                    </a>
                  </span>
                  <span>
                 
                    <a href="#">
                    
                      <i>
                     
                        <BsInstagram />
                      </i>
                    </a>
                  </span>
                  <span> 
                    <a href="#">
                     
                      <i>
                       
                        <BsLinkedin /> 
                      </i> 
                    </a>{" "}
                  </span>
                  <span>
                    {" "}
                    <a href="#">
                      
                      <i>
                        
                        <BsGithub /> 
                      </i>{" "}
                    </a>{" "}
                  </span>
                </div>
              </div>
            </div>
            }
            {
              aboutFilter === 'EDUCATION' && <Education />
            }
           
           {
             aboutFilter === 'SKILSS' && <Skills/>
           }
           {
             aboutFilter === 'ACHIEVEMENT' && <Achievement/>
           }
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
