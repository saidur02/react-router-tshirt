import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
          <Link to='/'>Home</Link>
          <Link to='review'>OrderReview</Link>
          <Link to='order'>Contact</Link>
          <Link to='contact'>About</Link>
        </nav>
    );
};

export default Header;