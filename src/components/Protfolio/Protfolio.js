import React from 'react';
import project1 from "../portfolioImg/1.png"
import project2 from "../portfolioImg/2.png"
import project3 from "../portfolioImg/3.png"
import project4 from "../portfolioImg/4.png"
import project5 from "../portfolioImg/5.png"
import project6 from "../portfolioImg/6.png"
import { Container,Row,Col } from "reactstrap"
import './Protfolio.css';

const portfolioData = [
    {
        "imgUrl":project1,
        "title":"React Landing page",
        "url":"#"
    },
    {
        "imgUrl":project2,
        "title":"React Landing page",
        "url":"#"
    },
    {
        "imgUrl":project3,
        "title":"React Landing page",
        "url":"#"
    },
    {
        "imgUrl":project4,
        "title":"React Landing page",
        "url":"#"
    },
    {
        "imgUrl":project5,
        "title":"React Landing page",
        "url":"#"
    },
    {
        "imgUrl":project6,
        "title":"React Landing page",
        "url":"#"
    }
]

const Protfolio = () => {
    return ( <section id='protfolio' className='portfolio-section'>
              
              <Container>
                  <Row>
                      <Col lg="12" className='portfolio-area mb-5'> 
                       <h5> Explore My Work & give a feedback </h5>
                       <h2> Portfolio </h2>
                      </Col>
                      {
                          portfolioData.map((p, index)=> <Col lg="4" md="6" sm="6" key={index}>
                          <div className="portfolio-card">
                              <div className="portfolio-img">
                                  <img src={p.imgUrl} alt="" className='w-100 mb-5'/>
                              </div>
                              <div className="portfolio-content">
                                     <h5> {p.title} </h5>
                                      <a href={p.url}> View live </a>
                                 </div>
                           </div>
                           </Col>
                          
                          )
                      }
                  </Row>
              </Container>
    </section>
    );
};

export default Protfolio;