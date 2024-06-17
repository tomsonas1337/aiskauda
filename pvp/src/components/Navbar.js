import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path based on where your image is within the src directory
import '../styles/Navbar.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
        <img src={logo} alt="AI Skauda Logo" className="navbar-logo" />
      </Link>
      <div className={`nav-items ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/articles" onClick={closeMobileMenu}>{t('articles')}</Link>
        <Link to="/exercises" onClick={closeMobileMenu}>{t('exercises')}</Link>
        <a href="https://www.motusvita.lt/" onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">{t('motusVita')}</a>
        <Link to="/about" onClick={closeMobileMenu}>{t('aboutUs')}</Link>
        <Link to="/contacts" onClick={closeMobileMenu}>{t('contacts')}</Link>
        <Link to="/quiz-intro" className="nav-button-link" onClick={closeMobileMenu}>
          <button>{t('quiz')}</button>
        </Link>
        <LanguageSwitcher /> {/* Moved the LanguageSwitcher here */}
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
