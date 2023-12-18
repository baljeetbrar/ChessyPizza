import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Login from './Login'
import Signup from './Signup'
import PasswordResetForm from "./PasswordResetForm";

const UserReq = () =>{

    const [showForgotPassword, setShowForgotPassword] = useState(false);
     
    const handlePasswordResetLinkClick = () => {
        setShowForgotPassword(true);
        
    }
    const handleBackToLogin = () =>{
        setShowForgotPassword(false);
      
    }


    return(
        <Container>
            <Row>
                <div className="user-welcome d-flex flex-row justify-content-around">
                    <Col  className="signup-section"> 
                        <Signup />
                    </Col>
                    <Col className="login-section">
                       {showForgotPassword ? (
                            <PasswordResetForm handleBackToLogin={handleBackToLogin} />
                       ) : (
                           <Login handlePasswordResetLinkClick={handlePasswordResetLinkClick}/>

                       )} 
                        
                    </Col>        
                </div>
            </Row>
        </Container>
    )
}

export default UserReq;
