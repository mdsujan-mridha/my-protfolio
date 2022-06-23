import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaCode } from "react-icons/fa"
import { IoMdCodeWorking} from "react-icons/io"
import { BiCodeCurly } from "react-icons/bi"
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa"
import { BsWordpress } from "react-icons/bs"
import './Services.css'


const servicesData = [
    {
        "icon": <FaCode/>,
        "title": "MERN Stack Web Development",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam natus consequatur quas labore ipsum fugiat molestiae deserunt fugit repudiandae numquam."

     },
    {
        "icon": <IoMdCodeWorking/>,
        "title": "Frontend Web development",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam natus consequatur quas labore ipsum fugiat molestiae deserunt fugit repudiandae numquam."

    },
    {
        "icon":<BiCodeCurly/>,
        "title": "Backend Web development",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam natus consequatur quas labore ipsum fugiat molestiae deserunt fugit repudiandae numquam."

    },
    {
        "icon":<FaLaptopCode />,
        "title": "Fixed issue about web development",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam natus consequatur quas labore ipsum fugiat molestiae deserunt fugit repudiandae numquam."

    },
    {
        "icon":<BsWordpress />,
        "title": "Wordpress",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam natus consequatur quas labore ipsum fugiat molestiae deserunt fugit repudiandae numquam."

    },
    {
        "icon":<FaCodeBranch />,
        "title": "Personal Portfolio",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam natus consequatur quas labore ipsum fugiat molestiae deserunt fugit repudiandae numquam."

    },
]

const Services = () => {
    return (  <section id='services' className='services-section'>
        <Container>
         <Row>
             <Col lg='12' className='services-area mb-5'>
                 <h5> Features </h5>
                 <h2> What What I Do </h2>
             </Col>
             {
                 servicesData.map((item, index)=> <Col lg ='4' md ='6' sm ='6' key={index} className='mb-4'>
                  <div className="single-service">
                     <span className="services-icon"> <i>   {item.icon}  </i> </span>
                     <h2> {item.title} </h2>
                      <p> {item.description} </p>
                 </div>
             </Col> 
                                                   
                 )
             }
         </Row>
        </Container>
              
             </section>
                 
    );
};

export default Services;