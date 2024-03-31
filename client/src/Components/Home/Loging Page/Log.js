import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Log = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');

  const handleEmailSubmit = (e) => {

    e.preventDefault();
    const generatedOtp = Math.floor(Math.random()*6+1);
    setOtp(generatedOtp);
    setOtpSent(true);
    setVerificationMessage('OTP sent successfully!');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === e.target.elements.otp.value) {
      setVerificationMessage('OTP verified successfully!');
    } else {
      setVerificationMessage('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      {!otpSent ? (
        <form onSubmit={handleEmailSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Send OTP</button>
          <p>{verificationMessage}</p>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <label>
            OTP:
            <input
              type="text"
              name="otp"
              maxLength="6"
              pattern="\d*"
              inputMode="numeric"
              required
            />
          </label>
          <button type="submit">Verify OTP</button>
          <p>{verificationMessage}</p>
        </form>
      )}
    </div>
  );
};

export default Log;