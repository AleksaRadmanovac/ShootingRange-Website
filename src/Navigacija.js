import React from 'react';
import './Navigacija.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='meni'>
        <li><a href="/">Home</a></li>
        <li><a href="/info">Info</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;