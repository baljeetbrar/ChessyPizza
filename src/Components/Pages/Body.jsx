import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ProductFilter from '../ProductData/ProductFilter'
import productsDatabase from '../ProductData/ProductDatabase';

const Body = () => {

  const [showFullDescription, setShowFullDescription] = useState(false);
  const categories = ['ALL', ...new Set(productsDatabase.map(product => product.category))];

  const expandContent = () => {
    setShowFullDescription(!showFullDescription);
  }
  return (
    <>
    <Container>
      <Row className='offer-banner-details'>
        <Col md={6} sm={12}>
          <div className='d-flex justify-content-between align-items-center'>
              <div className='home-banner-content'>
                <h1 className='home-banner-title'>
                  Handmade,
                  With an Extra
                  Pinch of <strong className='font-strong'>Love</strong>
                </h1>
                <div className='home-banner-desc'>
                  <p>Pizza, with its delectable combination of crispy crust, flavorful tomato sauce, and gooey melted cheese, is a universally beloved culinary delight.  </p>
                </div>
                <div className='home-banner-btn'>
                  <button className='btn-primary btn-large '>
                    <span className='btn-icon'> 
                      <AiOutlineShoppingCart />
                    </span> 
                    Order Now
                  </button> 
                </div>
              </div>
          </div>
        </Col>
        <Col md={6} sm={12}>
        <div className='offer-image'>
            <img className='full-width' src="https://i.ibb.co/WBc8hsY/banner-img.png" alt="banner-img" />
          </div>
        </Col>
      </Row>
      <Row className='company-details full-width-bg'>
      <span>
        <img className='full-width banner-background' src="https://i.ibb.co/BNBWb6m/order-top.png" alt="banner-background" />
      </span>
      <Container>
        <Row className='d-flex flex-wrap justify-content-around food-content-container text-center'>
          <Col lg={4} md={6} sm={12}>
            <div className='food-ordering-container'>
              <img src="https://i.ibb.co/VLdpVqR/order-1.png" alt="order-food-icon" />
              <h2 className='capital-text container-title'>order your food</h2>
              <p className={`container-des ${showFullDescription ? 'show-more' : ''}`}>
                At Chezzy Pizza, we've made ordering your favorite dishes easier than ever. Whether you're in the mood for a delectable meal, a quick snack, or even some delightful desserts, our user-friendly platform is designed to make your ordering experience seamless and convenient.
              </p>
              <button className='read-more-btn' onClick={expandContent}>
                    {showFullDescription ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} >
            <div className='delivery-options-container'>
              <img src="https://i.ibb.co/VLdpVqR/order-1.png" alt="order-food-icon" />
              <h2 className='capital-text container-title'>delivery or pick up</h2>
              <p className={`container-des ${showFullDescription ? 'show-more' : ''}`}>
                Enjoy your meal your way with our flexible delivery and pick-up options. You can have your order delivered to your doorstep for a hassle-free dining experience in the comfort of your home. If you're on the move and prefer a quick pick-up, we have that covered too. Just let us know what works best for you, and we'll make it happen.
              </p>
              <button className='read-more-btn' onClick={expandContent}>
                    {showFullDescription ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='delicious-recipes-container'>
              <img src="https://i.ibb.co/VLdpVqR/order-1.png" alt="order-food-icon" />
              <h2 className='capital-text container-title'>delicious recipe</h2>
              <p className={`container-des ${showFullDescription ? 'show-more' : ''}`}>
                Our culinary experts take pride in crafting each dish with the utmost care and attention to detail. The result? A symphony of flavors that are sure to delight your taste buds. We are committed to delivering delicious recipes that bring out the best in every ingredient and create a memorable dining experience.
              </p>
              <button className='read-more-btn' onClick={expandContent}>
                    {showFullDescription ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Row>
      <Row className='product-filter-wrapper'>
      <ProductFilter categories={categories} showAdditionalFilters={false} />

      </Row>
    </Container>

  
    </>
  )
}

export default Body