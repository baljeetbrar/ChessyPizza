import React from 'react';
import { Container } from 'react-bootstrap';
import ProductFilter from '../ProductData/ProductFilter';

const Menu = () => {
  // Additional logic specific to the Menu component can be added here

  return (
    <Container>
      <h1>Menu Page</h1>
      <ProductFilter showAdditionalFilters={true} />
    </Container>
  );
};

export default Menu;