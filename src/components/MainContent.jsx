"use client"

import { useState, useEffect, useRef } from "react"
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { HiOutlineHome } from "react-icons/hi"
import Navbar from "./Navbar"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Experiences from "./sections/Experiences"
import Blog from "./sections/Blog"
import Contact from "./sections/Contact"
import BlogPost from "./sections/BlogPost"
import Footer from "./Footer"
import ParticleBackground from "./ParticleBackground"

const MainContent = () => {
  console.log("MainContent component rendering")
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState("about")
  const [showFooter, setShowFooter] = useState(false)
  const contentRef = useRef(null)
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

  const handleNavClick = (section) => {
    setActiveSection(section)
    navigate(`/main/${section}`)
  }

  // Handle scroll to show footer only when scrolled to bottom
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current
        // Show footer when scrolled near the bottom (within 100px)
        setShowFooter(scrollTop + clientHeight >= scrollHeight - 100)
      }
    }

    const contentElement = contentRef.current
    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div
      className="main-content"
      style={{
        background: "linear-gradient(135deg, #13072e 0%, #3f2182 100%)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Add particle background with blur effect */}
      <div className="main-particles-container">
        <ParticleBackground blurred={true} />
      </div>

      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Home button only visible on desktop */}
          {!isMobile && (
            <Link to="/" className="home-button-link">
              <motion.div
                className="home-button"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiOutlineHome size={30} />
              </motion.div>
            </Link>
          )}

          <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
        </div>
      </div>

      <div className="content-container" ref={contentRef}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:day" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        {/* Add padding at the bottom to prevent footer overlap */}
        <div style={{ paddingBottom: "80px" }}></div>
      </div>

      <div className={`footer-container ${showFooter ? "visible" : ""}`}>
        <Footer />
      </div>
    </div>
  )
}

export default MainContent
