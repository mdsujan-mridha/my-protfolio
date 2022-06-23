import React from 'react';
import './Form.css';
const Form = () => {
    return ( <form className='form'>
        <div className="form-field">
            <input type="text" placeholder='Your name'/>
            
            </div>
        <div className="form-field">
            <input type="email" placeholder='Your mail' />
            </div>
        <div className="form-field">
            <textarea rows="2" ></textarea>
            </div>
            <button className="submit-btn" type='submit'>
                Submit
            </button>
    </form>
    );
};

export default Form;