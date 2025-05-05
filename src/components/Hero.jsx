import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa"
import Typed from "typed.js"
import { motion } from "framer-motion"
import ParticleBackground from "./ParticleBackground"
// Import the hero image directly from assets
import heroImage from "../assets/hero-image.png"

const Hero = () => {
  console.log("Hero component rendering")
  const [isLoaded, setIsLoaded] = useState(false)
  const typedRef = useRef(null)
  const typedElementRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)

    // Initialize Typed.js
    if (typedElementRef.current) {
      typedRef.current = new Typed(typedElementRef.current, {
        strings: [
          '<span class="name-franz">Franz</span>',
          '<span class="name-nathan">Nathan</span>',
          '<span class="name-dev">Front-end Developer</span>',
          '<span class="name-designer">Graphic Designer</span>',
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
        cursorChar: "|",
        smartBackspace: true,
        showCursor: true,
      })
    }

    // Cleanup function
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="hero-container">
      <ParticleBackground />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-image-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="border-beam"></div>
          <img
            src={heroImage || "/placeholder.svg"}
            alt="Franz Nathaniel"
            className="hero-image"
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%233f2182'/%3E%3Ctext x='50%25' y='50%25' fontSize='80' textAnchor='middle' dy='.3em' fill='white'%3EFN%3C/text%3E%3C/svg%3E"
            }}
          />
        </motion.div>

        <motion.div
          className="hero-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 className="greeting">Hello there, I am</h1>
          <h2 className="name">
            <span ref={typedElementRef}></span>
          </h2>
          <p className="description">
            An aspiring and passionate front-end dev and graphic designer from Western Mindanao State University.
          </p>

          <motion.div
            className="social-icons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="https://facebook.com/franzxvaldez14/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#4267B2" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/franzxvaldez/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0077B5" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/pransxzy.me/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#E1306C" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="mailto:franzxvaldez@gmail.com"
              whileHover={{ scale: 1.2, color: "#D44638" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://github.com/Fariss14"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#6e5494" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>

          <motion.div
            className="cta-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="cta-text">Wanna know more about me?</p>
            <Link to="/main">
              <motion.button
                className="click-me-btn interactive-button"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Click Me</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
