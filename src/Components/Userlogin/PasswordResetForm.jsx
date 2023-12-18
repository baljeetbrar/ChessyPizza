import React from "react";
import { Link } from "react-router-dom";

const PasswordResetForm = ({ passwordResetEmail, handleUserLogin, handlePasswordReset, handleBackToLogin, errorMessage }) => {
  return (
    <div className="login-form">
   
        <div className="login-form-header">
          <h3 className="text-bold secondary-font user-details-header">Reset Password</h3>
        </div>
        {errorMessage && <p className="error-message error-alert">{errorMessage}</p>}
      <div className="input-box">
        <input
          type="email"
          required={true}
          name="resetEmail"
          value={passwordResetEmail}
          onChange={handleUserLogin}
        />
        <span>Email</span>
      </div>
      <div className="input-box">
        <button className="contact-submit-btn submit-btn" onClick={handlePasswordReset}>
          Reset Password
        </button>
        <p><Link onClick={handleBackToLogin} className="back-to-login">Back to Login</Link></p>
      </div>
    </div>
  );
}

export default PasswordResetForm;
