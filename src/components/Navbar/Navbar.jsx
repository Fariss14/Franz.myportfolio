import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Franz-Resume.pdf'; // Path to your resume file in the public folder
    link.download = 'Franz-Resume.pdf';
    link.click();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      {/* Logo and Name */}
      <div className="nav-logo">
        <Link to="/">
          <img src="/f-logo.png" alt="Logo" className="logo" /> {/* Use root path */}
          <span className="logo-text"></span>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleDownloadResume}
          className="resume-button"
        >
          My Resume
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;