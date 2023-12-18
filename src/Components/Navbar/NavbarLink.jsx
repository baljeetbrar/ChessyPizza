import React,{useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container,Row, Col, Table, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import {auth} from '../Firebase/firebaseconfig';
import {Outlet, Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useCart } from '../ProductData/CartContext';
import { TfiShoppingCart } from "react-icons/tfi";



const NavbarLink = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { getTotalItems, getTotalPrice } = useCart();
  const [expanded, setExpanded] = useState(false);

  const isAuthenticated = auth.currentUser != null; // check if user is authenticated

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/') // user navigate to homepage.
    } catch (error) {
      console.error('error singing out:', error.message);
    }
  }
  const handleNavSelect = () => {
    // Manually toggle the collapse state when a Nav item is selected
    setExpanded(!expanded);
  };

  return (
    <>
    <Navbar collapseOnSelect
        expand="md"
        expanded={expanded}
        className='navbar-wrapper background-dark'
        onSelect={handleNavSelect}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="https://i.ibb.co/mFTYHMD/logo.png" alt="Logo" className='site-logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggle-section'/>
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse-list justify-content-start'>
          <Nav className="me-auto m1-auto">
            <Link to="/" className="nav-link nav-link-margin">Home</Link> 
            <Link to="/Menu" className="nav-link nav-link-margin">Menu</Link>
            <Link to="/About" className="nav-link nav-link-margin">About</Link>
            <Link to="/Contact" className="nav-link nav-link-margin">Contact</Link>
          </Nav>
        </Navbar.Collapse>
            <Nav className="d-none d-md-flex order-cart-section justify-content-evenly">
                <div className="order-section-items">
                  {isAuthenticated ? (
                     <Nav>
                     <Dropdown className='dropdown-submenu'>
                            <Dropdown.Toggle as={Nav.Link} className="nav-link dropdown-toggle-menu">
                                {auth.currentUser.displayName || 'My Account'} <span className="arrow navbar-toggle-icon"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='dropdown-submenu-list'>
                                <Dropdown.Item as={Link} to="/userprofile">My Profile</Dropdown.Item>
                                <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                     </Dropdown>
                   </Nav>
                    ) : (
                      
                      <Link to="/userreq" className="nav-link nav-link-margin">Sign In</Link>
                  )}
                   
                </div>
                <div className="order-section-items ">
                  <Link to="/usercart" className='cart-link'>
                    <div className="cart-wrapper">
                        <div className='cart-icon'>
                          <TfiShoppingCart />
                          <span className='total-items-in-cart'>{getTotalItems()}</span>
                         Items
                        </div>
                        <div className='cart-details secondary-font'>
                        <Table responsive striped bordered>
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Quantity</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.map((item) => (
                              <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                          <tr>
                            <td colSpan={3} className='text-center'>
                              <Button variant="primary" onClick={() => navigate('/checkout')}>
                                Checkout
                              </Button>
                            </td>
                        </tr>
                      <tr>
                        <td colSpan={3} className='text-center'>
                          <Button variant="secondary" onClick={() => navigate('/usercart')}>
                            Your Cart
                          </Button>
                        </td>
                      </tr>
                          </tfoot>
                        </Table>
                        </div>
                    </div>
                  </Link>
                </div>
                <div className="order-section-items">
                    <button className='square-btn'>Order Online</button>
                    {/* <Button className="square-btn">Order Online</Button> */}
                </div>
            </Nav>
      </Container>
    </Navbar>
      <Outlet/>
    </>
     
  );
};

export default NavbarLink;
