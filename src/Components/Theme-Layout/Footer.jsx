// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="backround-light">
      <Container>
        <Row>
          <Col sm={12}>
          <img
              src="https://i.ibb.co/gdFJ243/pizza.png"
              alt="Pizzon Logo"
              className="footer-banner container d-flex"
            />
          </Col>
        </Row>
        <Row className='footer-information'>
          <Col lg={3} md={4} xs={6}>
            
            <h6 className="footer-header text-bold secondary-font">INFORMATION</h6>
            <ul className="footer-list d-flex flex-column">
              <li>Home</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <h6 className="footer-header text-bold secondary-font">TOP ITEMS</h6>
            <ul className="footer-list d-flex flex-column">
              <li>Pepperoni</li>
              <li>Swiss Mushroom</li>
              <li>Barbeque Chicken</li>
              <li>Vegetarian</li>
              <li>Ham & Cheese</li>
            </ul>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <h6 className="footer-header text-bold secondary-font">OTHERS</h6>
            <ul className="footer-list d-flex flex-column">
              <li>Checkout</li>
              <li>Cart</li>
              <li>Product</li>
              <li>Locations</li>
              <li>Legal</li>
            </ul>
          </Col>
          <Col lg={3} md={12} xs={6}>
            <h6 className="footer-header text-bold secondary-font" >SOCIAL MEDIA</h6>
            <div className="d-flex flex-row justify-content-start social-icon"> 
                <a href="https://www.facebook.com">
                    < FaFacebook className='social-icon-svg'/>
                </a>
                <a href="https://www.twitter.com">
                    <FaTwitter className='social-icon-svg'/>
                </a>
                <a href="https://www.instagram.com">
                    <FaInstagram className='social-icon-svg'/>
                </a>
                <a href="https://www.youtube.com">
                    <FaYoutube className='social-icon-svg'/>
                </a>
            </div>
            <div className="app-store-buttons-wrapper d-flex justify-content-start">
                  {/* Google Play Store Button */}
                  <a
                    href="https://play.google.com/store/apps/details?id=your-app-package-name"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-play-button"
                  >
                    Google Play
                  </a>

                 {/* Apple App Store Button */}
                  <a
                    href="https://apps.apple.com/app/your-app-name/id1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-store-button"
                  >
                    App Store
                  </a>
              </div>
            <ul className="footer-list d-flex flex-column ">
                <li className="exclusive-offers">
                   <p>
                    Signup and get exclusive offers and coupon codes
                    </p> 
                </li>
                <li>
                    <button className='btn-primary sign-up-btn full-width'>Sign Up</button>
                </li>
            </ul>
            
          </Col>
        </Row>
        <Row className='footer-information'>
          <ul className='d-flex justify-content-md-between privacy-policy-list'>
              <li >Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Cookie Policy</li>
              <li>Terms & Conditions</li>
            </ul>
            <p className='reserveed-right'>&copy; 2023 CheezyPizza. All Rights Reserved by CheezyPizza</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
