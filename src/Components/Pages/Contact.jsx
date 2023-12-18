import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <Container>
      <Row className="content-header-row">
        <Col sm={12}>
          <div className="contact-header">
            <h1 className="text-bold text-center ">Contact Us</h1>
            <p>We value your feedback and are here to assist you in any way we can. Whether you have inquiries, suggestions, or simply want to reach out, we're just a message away. Feel free to get in touch with us using the information below:</p>
          </div>
        </Col>
      </Row>
      <Row className="contact-wrapper-row">
        <Col md={6}>
          <div className="d-flex justify-content-center contact-wrapper">
            <div className="d-flex flex-column contact-information">
              <div className="contact-adress-section round-icon-container">
                <i className="contact-page-icon"><FaHome className="icon-svg"/></i>
                <div className="address-details">
                  <h4 className="text-bold contact-section-head">Address</h4>
                  <address>
                    <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
                  </address>
                </div>
              </div>
              <div className="contact-adress-section round-icon-container">
                <i className="contact-page-icon"><FaPhone className="icon-svg"/></i>
                <div className="address-details">
                  <h4 className="text-bold contact-section-head">Phone</h4>
                  <a href="tel:+1234567890">+1 (123) 456-7890</a>
                </div>
              </div>
              <div className="contact-adress-section round-icon-container">
                <i className="contact-page-icon"><MdEmail className="icon-svg"/></i>
                <div className="address-details">
                  <h4 className="text-bold contact-section-head">Email</h4>
                  <a href="mailto:example@example.com">example@example.com</a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="contact-form-section">
            <ContactForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
