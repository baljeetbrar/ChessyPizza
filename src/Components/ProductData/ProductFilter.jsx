import React, { useEffect, useState } from 'react';
import { Nav,Container, Row, Col,Form } from 'react-bootstrap';
import productsDatabase from './ProductDatabase';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductFilter = ({categories, showAdditionalFilters}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState(8); // Initial number of visible products
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [showVeg, setShowVeg] = useState(false);
  const [showNonVeg, setShowNonVeg] = useState(false);
  const [priceRange, setPriceRange] = useState('')

  // Get unique categories from products
  const uniqueCategories = ['All', ...new Set(productsDatabase.map(product => product.category))];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? shuffledProducts.length > 0 ? shuffledProducts : productsDatabase
    : productsDatabase.filter(product => product.category === selectedCategory);

    const applyFilters = () => {
      let filtered = filteredProducts;
      if(showVeg) {
        filtered = filtered.filter(product => product.vegetarian);
      }
      if(showNonVeg){
        filtered = filtered.filter(product =>  !product.vegetarian)
      }
      if(priceRange){
        const [min, max] = priceRange.split('-').map(Number);
        filtered = filtered.filter(product => product.price >= min && product.price <= max);
      }
      return filtered;
  }

    const handleLoadMore = () => {
      setVisibleProducts(prev => prev + 8); // Increase the number of visible products
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    };

  const handleVegCheckboxChange = () => {
    setShowVeg(true);
    setShowNonVeg(false)
  };

  const handleNonVegCheckboxChange = () => {
    setShowNonVeg(true);
    setShowVeg(false);
  };

  const handlePriceRangeChange = e => {
    setPriceRange(e.target.value);
  };

    useEffect(()=>{
      if(selectedCategory === 'All'){
        const newShuffledArray = handleShuffleArray(productsDatabase);
        setShuffledProducts(newShuffledArray);
      }else{
        setShuffledProducts([]);
      }
    },[selectedCategory]);

    //Shuffle Array algorithm

    const handleShuffleArray = (array) => {
      const shuffledArray = array.slice();
      for(let i = shuffledArray.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    }
  const filteredProductsAndAppliedFilter = applyFilters();

  console.log('Visible Products:', visibleProducts);
  console.log('Filtered Products:', filteredProducts);
  return (
    <Container>
      {/* Horizontal Filter Bar */}
      <Nav variant="tabs" defaultActiveKey="All" className="product-header-list">
        {uniqueCategories.map(category => (
          <Nav.Item key={category}>
            <Nav.Link className="product-list-category"
              eventKey={category}
              onClick={() => handleCategorySelect(category)}
              active={selectedCategory === category}
            >
              {category}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Additional Filters */}
      {showAdditionalFilters && (
        <Form className="product-filters d-flex flex-row">
          <Form.Check type="checkbox" label="Veg" checked={showVeg} onChange={handleVegCheckboxChange} />
          <Form.Check
            type="checkbox"
            label="Non-Veg"
            checked={showNonVeg}
            onChange={handleNonVegCheckboxChange}
          />
          <Form.Group controlId="priceRange" className='d-flex flex-row'>
            <Form.Label className='filter-price-range text-bold'>Price Range</Form.Label>
            <Form.Select onChange={handlePriceRangeChange}>
              <option value="">Select</option>
              <option value="0-10">$0 - $10</option>
              <option value="10-20">$10 - $20</option>
              <option value="20-30">$20 - $30</option>
            </Form.Select>
          </Form.Group>
        </Form>
      )}


      {/* Display Filtered Products */}
      <Row className="product-list">
        {filteredProductsAndAppliedFilter.slice(0, visibleProducts).map(product => (
          <Col key={product.id} lg={3} md={6} sm={6}>
            <div className="product-item">
              <Link to={`/menu/product/${product.id}`} className='product-details-path'>
              <img className="full-width" src={product.img} alt={`${product.name} image`} />
              <h3 className="secondary-font text-bold">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className='price-cart'>
                <span className="secondary-font text-bold">${product.price.toFixed(2)}</span>
                <span className='add-to-cart-icon '>
                    <FaCartPlus />
                </span>
              </div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
      <div className='load-more-wrapper text-center'>
        {/* Load more button */}
        {visibleProducts < filteredProductsAndAppliedFilter.length && (
          <button onClick={handleLoadMore} className='load-more-btn '>
          Load More
          </button>
        )}
      </div>
    </Container>
  );
};

export default ProductFilter;
