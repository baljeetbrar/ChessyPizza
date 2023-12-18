import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-box">
      <input
        type={showPassword ? 'text' : 'password'}
        required={true}
        name="password"
        value={value}
        onChange={onChange}
      />
      <span>Password</span>
      <button
        type="button"
        className="eye-icon"
        onClick={() => setShowPassword(!showPassword)}
      >
       {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </button>
    </div>
  );
};

export default PasswordInput;

