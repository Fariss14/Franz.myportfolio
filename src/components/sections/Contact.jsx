"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaFacebook, FaDownload } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <motion.div className="section contact-section" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 className="section-title" variants={itemVariants}>
        Contact
      </motion.h2>

      <div className="contact-fixed-container">
        <motion.div className="contact-content" variants={itemVariants}>
          <motion.div className="contact-info-centered" variants={itemVariants}>
            <h3 className="contact-info-title">Get In Touch</h3>

            <div className="contact-social">
              <h4>Connect With Me</h4>
              <div className="contact-social-icons">
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
                  href="https://github.com/Fariss14"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#6e5494" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://facebook.com/franzxvaldez14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#4267B2" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook />
                </motion.a>
              </div>
            </div>

            <p className="excitement-text">I am excited and delighted to working with you ASAP!</p>

            <motion.div className="resume-button-container">
              <a href="/resume.pdf" download className="resume-button-link">
                <FaDownload className="resume-icon" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="contact-form-container glass-container" variants={itemVariants}>
            <h3>Send me a message</h3>
            {isSubmitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
