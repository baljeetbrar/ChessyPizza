import React from 'react';
import { useCart } from './CartContext';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const UserCart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    newQuantity = Math.max(1, newQuantity);
    updateQuantity(itemId, newQuantity);
  };

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }



  return (
    <Container>
      <Row>
        <Col xm={12} className='text-center user-cart-details'>
          <h2 className='user-cart-header secondary-font text-bold'>Your Cart</h2>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (              
                <tr key={item.id} className="">
                  <td>
                    <strong className='secondary-font text-left'>{item.name}</strong>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className='quantity-container'>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className='quantity-button'
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className='quantity-value'>{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className='quantity-button'
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
                
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <div className='total-items text-bold'>Total Items: </div>
                </td>
                <td colSpan={3} className='text-bold'>{getTotalItems()}</td>
              </tr>
              <tr>
                <td>
                  <div className='total-price text-bold'>Total Price: </div>
                </td>
                <td colSpan={3} className='secondary-font text-bold'>${getTotalPrice()}</td>
              </tr>
            </tfoot>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCart;
