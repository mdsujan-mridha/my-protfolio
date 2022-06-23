


import React from 'react';
import htmlIcon from "../icons/html.png"
import cssIcon from "../icons/css.png"
import bootstraplIcon from "../icons/bootstrap.png"
import tailwindIcon from "../icons/tailwind.png"
import jsIcon from "../icons/js.png"
import reactIcon from "../icons/react.png"
import firebaseIcon from "../icons/firebase.png"
import nodeIcon from "../icons/node.png"
import mongodbIcon from "../icons/mongodb.png"
import apiIcon from "../icons/api.png"
import expressIcon from "../icons/express.png"
import mySqlIcon from "../icons/mySql"
import './Skills.css';

const Skills = () => {
    return (
        <div className="skil-wrapper">
           
            <div className="skill-section-area"> 
              <div className="html-icon">  
              <img src={htmlIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={cssIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={bootstraplIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={tailwindIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={jsIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={reactIcon} alt="" />
              </div>
              <div className="html-icon">  
              <img src={firebaseIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={nodeIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={mongodbIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={apiIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={expressIcon} alt="" />
              </div>

              <div className="html-icon">  
              <img src={mySqlIcon} alt="" />
              </div>

             </div>
        </div>
    );
};

export default Skills;