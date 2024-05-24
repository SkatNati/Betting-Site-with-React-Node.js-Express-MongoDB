import React, { useState } from 'react';
import './register.css'; // Make sure to import your CSS module here

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation to check if passwords match
    if (password!== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle form submission logic here
    console.log('Registration successful', { phoneNumber, password });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone-number">Phone Number:</label>
        <input
          type="tel"
          id="phone-number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div>
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>

        <div>
          <input type="checkbox" id="privacy" name="privacy" required />
          <label htmlFor="privacy">I agree to the Privacy Policy</label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
