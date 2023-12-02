import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginSignup = () => {
  const history = useHistory();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://home-pal.onrender.com/api-docs/#/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      console.log('Login successful');
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
          name: registerName,
          email: registerEmail,
          password: registerPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      console.log('Signup successful');
      history.push('/index.html');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="text" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>

      {/* Signup Form */}
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input type="text" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default LoginSignup;
