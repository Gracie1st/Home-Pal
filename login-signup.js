import React, { useState } from 'react';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform login API call
    try {
      const response = await fetch('https://home-pal.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Handle successful login, e.g., redirect to another page
      console.log('Login successful');
      history.push('/homepage.html');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Perform signup API call
    try {
      const response = await fetch('https://home-pal.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      // Handle successful signup, e.g., redirect to another page
      console.log('Signup successful');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="login-email">Email:</label>
        <input
          type="text"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" id="login-submit">Login</button>
      </form>

      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="login-email">Email:</label>
        <input
          type="text"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" id="signup-submit">Sign Up</button>
      </form>
    </div>
  );
};

export default AuthPage;
