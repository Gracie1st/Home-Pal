// LoginSignup.js
import React, { useState } from 'react';

const LoginSignup = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://home-pal.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginemail,
          password: loginpassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      console.log('Login successful');
      // Handle successful login (e.g., redirect to another page)
      history.push('/index.html');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://home-pal.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: registername,
          email: registeremail,
          password: register-password,
        }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      console.log('Signup successful');
      // Handle successful signup (e.g., redirect to another page)
      history.push('/index.html');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

export default LoginSignup;
