import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about-us-container text-center">
    <Row className="about-us-row">
      <Col sm={12}>
        <h2 className="about-us-header secondary-font text-bold">Our Story</h2>
        <p>
          Welcome to Chessy Pizza, where passion for pizza meets a commitment to quality and flavor. Our journey began with a simple idea: to create a pizza experience that goes beyond the ordinary. Every slice tells a story of dedication, craftsmanship, and a love for great food.
        </p>
      </Col>
    </Row>
    <Row className="about-us-row section-lines">
        <Col sm={12} md={6} >
            <div className="about-page-image-wrapper d-flex justify-content-around">
                <div className="about-page-image-section">
                    <img className='about-page-image full-width' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE73ucSb8ZcwbSzesZmkQjKXwrRO7_OBSaA7k9o2NBRg168mxG-qL5tYtS9YXsoRT1t7A&usqp=CAU" alt="Chessy Pizza"/>
                </div>
                 <div className="about-page-map-section">
                     <img className='about-page-image full-width' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE73ucSb8ZcwbSzesZmkQjKXwrRO7_OBSaA7k9o2NBRg168mxG-qL5tYtS9YXsoRT1t7A&usqp=CAU" alt="Chessy Pizza"/>
                 </div>
            </div>

        </Col>
        <Col sm={12} md={6}>
            <div className="chessy-difference-wrapper text-left">
                <h3 className="about-us-header secondary-font text-bold">The Chessy Difference</h3>
                <p>
                At Chessy Pizza, we take pride in crafting pizzas that are more than just a meal – they're an experience. What sets us apart?
                </p>
            <ul>
                <li><strong>Quality Ingredients:</strong> We believe that the best pizzas start with the finest ingredients.</li>
                <li><strong>Artisanal Craftsmanship:</strong> Our skilled chefs bring years of experience and a passion for perfection to every pizza they create.</li>
                <li><strong>Innovation Meets Tradition:</strong> Our menu combines classic favorites with unique, signature creations.</li>
            </ul>
            </div>
        </Col>
    </Row>
    <Row className="about-us-row ">
      <Col md={12}>
        <h3 className="about-us-header secondary-font text-bold">Our Commitment</h3>
        <p>
          At Chessy Pizza, we love to make people happy with our food. Every dish we create is crafted with care and dedication to ensure a taste you'll remember. We believe that each bite should be a delightful experience, leaving a lasting impression on your taste buds. Join us on a culinary journey where our commitment is not just to serve great pizza, but to create memories with every flavor-packed moment.
        </p>
      </Col>
    </Row>
    <Row className="about-us-row section-lines">
            <Col md={6}>
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOVEVrxCKBls1jAhl8rHTSfNLM0KoUbbFPP9TMFqgLerz5YlxGyUQzcxe3ZCY7KCPPQU&usqp=CAU"
                alt="First Pizza"
                fluid
                className="special-pizza-image full-width"
            />
            </Col>
            <Col md={6}>
            <div className="pizza-content">
                <h3 className="about-us-header secondary-font text-bold">Delicious Margherita</h3>
                <p>
                Our Margherita pizza is a classic masterpiece. Made with fresh tomatoes, mozzarella, and basil, each bite is a burst of flavor that will leave you craving for more.
                </p>
            </div>
            </Col>
            <Col md={6}>
            <div className="pizza-content">
                <h3 className="about-us-header secondary-font text-bold">Delicious Margherita</h3>
                <p className='pizza-content-des'>
                Our Margherita pizza is a classic masterpiece. Made with fresh tomatoes, mozzarella, and basil, each bite is a burst of flavor that will leave you craving for more.
                </p>
            </div>
            </Col>
            <Col md={6}>
            <Image
                src="https://img.freepik.com/free-photo/grilled-margherita-pizza-with-tomato-sauce-cheese-basil-mushroom_23-2147926077.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais"
                alt="First Pizza"
                fluid
                className="special-pizza-image full-width"

            />
            </Col>
       
      </Row>
    <Row className="about-us-row">
      <Col md={12}>
        <h3 className="about-us-header secondary-font text-bold">Join the Chessy Family</h3>
        <p className='pizza-content-des'>
          Whether you're a pizza enthusiast, a casual diner, or someone just looking for a memorable meal, we invite you to join the Chessy Pizza family. Explore our menu, place an order, and experience the Chessy difference for yourself. A taste you'll remember.
        </p>
      </Col>
    </Row>
  </Container>
  )
}

export default About