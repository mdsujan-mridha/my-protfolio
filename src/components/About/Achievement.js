


import React from 'react';
import './Achievement.css';
const Achievement = () => {
    return (
        <div className="achievement-section">
            
            <div className="achievement-container d-flex align-items-center gap-5">
                <div className="Single-achievement w-50">
                    <h3> MERN Stack Web developer course </h3>
                    <p className='course-name'> Programming Hero Batch-5 </p>
                    <p className='details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, beatae! </p>

                </div>

                <div className="Single-achievement w-50">
                    <h3> Full Stack  Web developer course </h3>
                    <p className='course-name'> Interactive cares Batch-3 </p>
                    <p className='details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, beatae! </p>

                </div>

            </div>
        </div>
        
    );
};

export default Achievement;