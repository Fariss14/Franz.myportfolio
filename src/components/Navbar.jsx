"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const Navbar = ({ activeSection, handleNavClick }) => {
  console.log("Navbar component rendering, active section:", activeSection)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile view based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const navItems = [
    { id: "about", label: "ABOUT ME" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "experiences", label: "EXPERIENCES" },
    { id: "blog", label: "BLOG" },
    { id: "contact", label: "CONTACT" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Mobile hamburger menu - now on the left */}
      {isMobile && (
        <div className="mobile-menu-toggle left-toggle" onClick={toggleMenu}>
          <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="hamburger-inner">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}

      {/* Navbar title - centered */}
      <div className="navbar-title">
        <h1></h1>
      </div>

      {/* Desktop navigation */}
      {!isMobile && (
        <ul className="nav-list desktop-nav">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              onClick={() => handleNavClick(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      )}

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.ul
            className="nav-list mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.li
              className="nav-item"
              onClick={() => {
                setIsMenuOpen(false)
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </motion.li>

            {navItems.map((item) => (
              <motion.li
                key={item.id}
                className={`nav-item ${activeSection === item.id ? "active" : ""}`}
                onClick={() => {
                  handleNavClick(item.id)
                  setIsMenuOpen(false)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
