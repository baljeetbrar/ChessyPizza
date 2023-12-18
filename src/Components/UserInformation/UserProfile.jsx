import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebaseconfig';
import PasswordChange from './PasswordChange';
import { updatePassword } from 'firebase/auth';

 
const UserProfile = ({userRegistration}) => {
    const navigate = useNavigate();
    const user = auth.currentUser; // Retrieve the currently signed-in user
  
    console.log('userRegistration:', userRegistration);

  // User data from Firebase
  const fullName = user ? user.displayName : 'N/A';
  const userEmail = user ? user.email : 'N/A' ;
  const phoneNumber = user ? user.number  : 'N/A';

    return (
        <Container>
        <div id="userProfile">
          <h2>User Profile</h2>
          <Row>
            <Col>
              <Image id="profileImage" src="" alt="Profile Image" fluid />
            </Col>
          </Row>
          <Row>
            <Col>
              <p id="fullName">Full Name: {fullName}</p>
              <p id="email">Email: {userEmail}</p>
              <p id="number">Number: {phoneNumber}</p>
            </Col>
          </Row>
          <PasswordChange user={user} />
        </div>
      </Container>
       
    );
};

export default UserProfile;
