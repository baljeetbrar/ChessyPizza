import React, { useState } from "react";
import {Container} from 'react-bootstrap';

const ContactForm = () => {

  const url="";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted]= useState(false);

  const handleDataChange = (e)=>{
    const newData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newData)
  }

  const handleFormSubmit = async(e)=>{
    e.preventDefault();
    console.log('Form Data :', formData); // form data displayed in console


    setFormData({ //input-field data cleared
      name: "",
      phone: "",
      email: "",
      message: ""
    });

    setFormSubmitted(true);
  }

	return (
		<>
		<Container>
        <div className="contact-form-wrapper">
          {formSubmitted ? (
            <div>
              <h2 className="text-bold"> Thank you for sending us a message !</h2>
              <p>We will get back to you soon.</p>
              <button className="square-btn" onClick={()=>setFormSubmitted(false)}>Return to Contact Page</button>
            </div>
          ):(

            <form className="" action="" id="contact-form" onSubmit={handleFormSubmit}>
            <h2 className="text-bold">Send Message</h2>
            <div className="input-box">
              <input type="text" required={true} name="name" onChange={handleDataChange} value={formData.name} />
              <span>Full Name</span>
            </div>
            
             <div className="input-box">
              <input type="tel" required={true} name="phone" onChange={handleDataChange} value={formData.phone}/>
              <span>Phone</span>
            </div>

            <div className="input-box">
              <input type="email" required={true} name="email" onChange={handleDataChange} value={formData.email}/>
              <span className="userEmail">Email</span>
            </div>

            <div className="input-box">
              <textarea required={true} name="message" onChange={handleDataChange} value={formData.message}/>
              <span>Type your Message...</span>
            </div>
            
            <div className="input-box">
                <button className="contact-submit-btn submit-btn">Send</button>
            </div>
          </form>
            )}
        </div>
		</Container>
		</>
	);
}

export default ContactForm;

