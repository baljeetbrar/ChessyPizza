import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row} from 'react-bootstrap';

import Home from './Home'

const Error = () => {
  return (
    <Container>
      <Row>
        <div className='d-flex error-page'>
            <div className='error-page-wrapper text-center'>
              <div className='error-image full-width'>
                <img src="https://i.ibb.co/xFNftnk/dribbble-1.gif" alt="error-image" />
              </div>
              <div className='error-des text-center'>
                <h1 className='error-page-header'>Look like you're lost</h1>
                <p className='error-page-des'>the page you are looking for not avaible!</p>
                
              </div>
             <button className='square-btn error-page-btn'>
                <Link to="/">Go to Home</Link> 
              </button> 
              <span className='separator'>
                |
              </span> 
              <button className='square-btn error-page-btn'>
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
        </div>
      </Row>
    </Container>
  )
}

export default Error