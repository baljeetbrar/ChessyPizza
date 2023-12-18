import React,{useState} from "react";
import { Container, Row } from "react-bootstrap";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import {auth} from '../Firebase/firebaseconfig';
import PasswordResetForm from "./PasswordResetForm";
import PasswordInput from "./PasswordInput";

const Login = () =>{
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [passwordResetEmail, setPasswordResetEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [userLogin, setUserLogin] = useState({username : "", password : ""});
    const navigate = useNavigate();

    const handleUserLogin = (e) =>{
        const loginData = {
            ...userLogin,
            [e.target.name]: e.target.value,
        };
        setUserLogin(loginData);
    }

    const handleLoginSubmit = async(e) =>{
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                userLogin.username,
                userLogin.password
            );

            console.log('user login info:', userCredential.user.username);

            setUserLogin({ 
                username: '',
                password: ''
              });
              setErrorMessage(null); 
              // Redirect to a different page after successful login
                 navigate('/');


        } catch (error) {
            console.error('Error signing in:', error.message);
            setErrorMessage('*Invalid username or password'); 
        }
    }
    const handlePasswordReset = async () => {
        try {
          await sendPasswordResetEmail(auth, passwordResetEmail);
          setErrorMessage('Password reset email sent. Please Check your Inbox or Junk Folder.');
          setPasswordResetEmail('');
        } catch (error) {
          console.error('Error sending password reset email:', error.message);
          setErrorMessage('Error sending password reset email.');
        }
      };
    const handlePasswordResetLinkClick = () => {
        setShowForgotPassword(true);
    };

    const handleBackToLogin = () =>{
        setShowForgotPassword(false);
        
        setErrorMessage(null);
    }
    return(
        <Container>
            <Row >
                <div className="Login-form-wrapper">
                    

            {showForgotPassword ? (
            // Render PasswordResetForm when showForgotPassword is true
            
            <PasswordResetForm
              passwordResetEmail={passwordResetEmail}
              handleUserLogin={(e) => setPasswordResetEmail(e.target.value)}
              handlePasswordReset={handlePasswordReset}
              handleBackToLogin={handleBackToLogin}
              errorMessage={errorMessage}
              
            />
          ) : (
            <>
            <div className="login-form-header">
                       <h3 className="text-bold secondary-font user-details-header">Login</h3> 
                    </div>
                <form action="" onSubmit={handleLoginSubmit}>

                    <div className="validation">
                    {errorMessage && <p className="error-message error-alert">{errorMessage}</p>}
                    </div>

                    <div className="login-form">
                         <div className="input-box">
                            <input type="text" required={true} name="username" value={userLogin.username}
                            onChange={handleUserLogin}/>
                            <span> Username/Email</span>
                        </div>
                    </div>
                    <div className="login-form">
                         <div className="input-box">
                         <PasswordInput
                                value={userLogin.password}
                                onChange={handleUserLogin}
                                />
                        </div>
                    </div>
                    <div className="forget-pwd">
              {showForgotPassword ? (
                            <div className="forgot-password-form">
                            <input
                                type="email"
                                required={true}
                                name="email"
                                value={userLogin.username}
                                onChange={handleUserLogin}
                            />
                            <span>Email</span>
                            <button onClick={handlePasswordReset}>Reset Password</button>
                            </div>
                        ) : (
                            <a href="#" onClick={handlePasswordResetLinkClick}>
                            Forget Password?
                            </a>
                        )}
                          </div>
                    
                    
                    <div className="input-box">
                        <button className="contact-submit-btn submit-btn">Login</button>
                    </div>
                    
                </form>
                </>
        )}
                </div>
            </Row>

        </Container>
    )
}

export default Login;