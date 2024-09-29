// src/pages/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data in localStorage or call an API to save
    localStorage.setItem('customerData', JSON.stringify(formData));
    alert('Account created successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleInputChange} required />
      <label>Email:</label>
      <input type="email" name="email" onChange={handleInputChange} required />
      <label>Password:</label>
      <input type="password" name="password" onChange={handleInputChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
