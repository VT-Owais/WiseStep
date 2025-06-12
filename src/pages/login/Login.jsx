import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">WiseStep Login</h1>
        <p className="login-subtitle">Welcome back! Let's take Wise Steps .</p>
        <form className="login-form">
          <input type="text" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" /><br />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-footer">Don't have an account? &nbsp;<a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;