import React from 'react';
import { Route, Routes ,useLocation} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';
import NavbarLink from '../Navbar/NavbarLink';
import Footer from '../Theme-Layout/Footer'
import UserReq from '../Userlogin/UserReq';
import UserProfile from '../UserInformation/UserProfile';
import ProductDetails from '../ProductData/ProductDetails';
import { CartProvider } from '../ProductData/CartContext';
import UserCart from '../ProductData/UserCart';
import Breadcrumbs from '../Pages/Breadcrumbs';
import Menu from '../Pages/Menu';


const NavbarRouter = () =>{
    const location = useLocation();
	const currentPage = location.pathname;
    return(
        <CartProvider>
            <div className='layout d-flex flex-column'>
                <div className='navbar-wrapper'>
                    <NavbarLink />
                </div>
                <div className='breadcrumbs-wrapper'>
                        <Breadcrumbs currentPage={currentPage} />
                    </div>
                <div className='content-wrapper'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='about' element={<About />} />
                        <Route path='menu' element={<Menu />} />
                        

                        <Route path='menu/product/:id' element={<ProductDetails />} />

                        <Route path='usercart' element={<UserCart /> } />
                        <Route path='*' element={<Error />} />
                        <Route path='userreq' element={<UserReq />} />
                        <Route path='userprofile' element={<UserProfile />}/>
                        
                        
                    </Routes>
                </div>
                <div className="footer">
                    <Footer  />
                </div>
            </div>
      </CartProvider>
    );
}

export default NavbarRouter
