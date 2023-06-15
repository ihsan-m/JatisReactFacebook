// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ username, onLogout }) => {
  return (
    <nav>
      <h1>Welcome, {username}</h1>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
