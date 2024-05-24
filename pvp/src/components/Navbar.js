import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path based on where your image is within the src directory
import '../styles/Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
        <img src={logo} alt="AI Skauda Logo" className="navbar-logo" />
      </Link>
      <div className={`nav-items ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/articles" onClick={closeMobileMenu}>Straipsniai</Link>
        <Link to="/exercises" onClick={closeMobileMenu}>Mankštos</Link>
        <a href="https://www.motusvita.lt/" onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">Motus Vita</a> 
        <Link to="/contacts" onClick={closeMobileMenu}>Kontaktai</Link>
        <Link to="/quiz-intro" className="nav-button-link" onClick={closeMobileMenu}>
          <button>Testas</button>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
