import React ,{useState} from "react";
import { Container, Row } from "react-bootstrap";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../Firebase/firebaseconfig';
import PasswordInput from "./PasswordInput";


const Signup = () =>{
    const [userRegistration, setUserRegistration] = useState({
        username : "",
        email: "",
        phone: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState(null);


    const handleInputChange = (e) =>{
        const userRegistrationData = {
            ...userRegistration,
            [e.target.name] : e.target.value,
        };
        setUserRegistration(userRegistrationData);
    }

    const handleUserRegistration = async(e)=>{
        e.preventDefault();

        const userData ={
            username : userRegistration.username,
            email : userRegistration.email,
            phone : userRegistration.phone,
            password : userRegistration.password,
        };
        try {
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              userRegistration.email,
              userRegistration.password
            );
      
            // You can access the user data using userCredential.user
      
            console.log('handleUserRegistration function is called');
            console.log('User Data:', userCredential.user);
      
            setUserRegistration({
              username: '',
              phone: '',
              email: '',
              password: '',
            });
        }
        catch(error){
            console.error('Error sending password reset email:', error.message);
            setErrorMessage(`*${error.message}\n Please try to Login or Reset your password`);
        }
      };

    return(
        <Container>
            <Row >
                <div className="Login-form-wrapper">
                    <div className="login-form-header">
                       <h3 className="text-bold secondary-font user-details-header" >Create New Account</h3> 
                    </div>
                    <form action="" onSubmit={handleUserRegistration}>
                    
                    <div className="Validation">
                    {errorMessage && <p className="error-message error-alert" style={{ whiteSpace: 'pre-line' }}>{errorMessage}</p>}
                    </div>
                    <div className="login-form">
                         <div className="input-box">
                            <input type="text" required={true} name="username" value={userRegistration.username} onChange={handleInputChange}/>
                            <span>Username</span>
                        </div>
                    </div>
                    <div className="login-form">
                         <div className="input-box">
                            <input type="email" required={true} name="email" value={userRegistration.email} onChange={handleInputChange}/>
                            <span>Email</span>
                        </div>
                    </div>
                     <div className="login-form">
                         <div className="input-box">
                            <input type="tel" required={true} name="phone" value={userRegistration.phone} onChange={handleInputChange}/>
                            <span>Phone</span>
                        </div>
                    </div>
                    <div className="login-form">
                         <div className="input-box">
                         <PasswordInput
                                value={userRegistration.password}
                                onChange={handleInputChange}
                                />
                        </div>
                    </div>
                    <div className="input-box">
                        <button className="contact-submit-btn submit-btn">Sign Up</button>
                    </div>
                    </form>
                </div>
            </Row>
        </Container>
    )
}

export default Signup;
