import React,{useState} from 'react';
import {Link, useParams } from 'react-router-dom';
import productsDatabase from '../ProductData/ProductDatabase';
import { Container, Row, Col } from 'react-bootstrap';
import { useCart } from './CartContext';
import Slider from 'react-slick';

const ProductDetails = () => {
  const { id } = useParams();
  const selectedProduct = productsDatabase.find((product) => product.id.toString() === id);
  
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

    if (!selectedProduct) {
        return <div>Product not Found</div>
    }
    const handleAddToCart = () => {
        addToCart({
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          quantity: quantity, 
        });
      };

      const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity > 0) {
          setQuantity(newQuantity);
        }
      };


      const getRelatedProducts = () => {
        return productsDatabase.filter(product => product.category === selectedProduct.category && product.id !== id);
      }
      const relatedProducts = getRelatedProducts();
    

      const PrevArrow = ({ onClick }) => (
        <button type="button" onClick={onClick} className="slick-prev">
          Previous
        </button>
      );
      
      const NextArrow = ({ onClick }) => (
        <button type="button" onClick={onClick} className="slick-next">
          Next
        </button>
      );
       // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

 
  return (
    <>
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                   <div className='selected-product-image'>
                         <img src={selectedProduct.img} alt={`${selectedProduct.name} image`} className='full-width'/>
                    </div> 
                </Col>
                <Col xs={12} lg={6}>
                    <div className='selected-product-details'>
                        <h2 className='secondary-font text-bold'>{selectedProduct.name}</h2>
                        <p className='selected-product-des'>{selectedProduct.description}</p>
                        <p className='selected-product-price'>
                            Price: 
                                <sup>$</sup> <strong>{selectedProduct.price.toFixed(2)}</strong>
                        </p>
                        <p>
                        <label htmlFor='quantityDropdown'>Quantity:</label>
                        <select id='quantityDropdown' value={quantity} onChange={handleQuantityChange}>
                            {[...Array(10).keys()].map((value) => (
                            <option key={value + 1} value={value + 1}>
                                {value + 1}
                            </option>
                            ))}
                        </select>
                        <button onClick={handleAddToCart} className='add-to-cart'>
                            Add to Cart
                        </button>
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='text-center related-product-wrapper'>
                      <h4 className='brand-name primary-font'>Fresh From Chessy Pizza</h4>        
                      <h1 className='related-product-header text-capital text-bold'>related products</h1>    

                      {relatedProducts.length > 0 && (
                        <Slider  {...sliderSettings}>
                            {relatedProducts.map((product, index) =>(
                                <div key={index}>
                                  <Link to={`/menu/product/${product.id}`} className='related-product'>
                                    <img src={product.img} alt={product.name} className='related-product-image' />
                                    <h4>{product.name}</h4>
                                    <div className='related-product-details'>
                                        <p>${product.price.toFixed(2)}</p>
                                    </div>
                                  </Link>
                                </div>
                            ))}
                        </Slider>
                      ) }
                </Col>
            </Row>
        </Container>
    
    
    </>
  )
}

export default ProductDetails