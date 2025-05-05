"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaCode, FaLaptopCode, FaUserAlt, FaMapMarkerAlt } from "react-icons/fa"

const About = () => {
  console.log("About component rendering")

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
    <motion.div className="section about-section" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 className="section-title" variants={itemVariants}>
        About Me
      </motion.h2>

      <motion.div className="about-centered-content" variants={itemVariants}>
        <h3 className="about-name">Franz Nathaniel R. Valdez</h3>

        <motion.div className="about-description-box glass-container" variants={itemVariants}>
          <p>
            As of the moment, I am still honing my skills to be a skilled Front-end Developer and UI/UX Designer. I am
            more on blending creativity with functionality to create experience that truly connect with people.
          </p>

          <p>
            My journey in tech began when I enrolled in BS Information Technology at Western Mindanao State University.
            Since then, I've been passionate about creating visually appealing and user-friendly interfaces that solve
            real problems. I believe that good design is not just about aesthetics, but also about functionality and
            accessibility.
          </p>

          <p>
            When I'm not coding or designing, you can find me exploring new places, listening to RnB music, or watching
            sci-fi movies. I'm always eager to learn new technologies and techniques to improve my skills and create
            better digital experiences.
          </p>
        </motion.div>

        <div className="about-categories">
          <div className="about-category">
            <h3 className="category-title">
              <FaGraduationCap className="category-icon" /> Education
            </h3>
            <div className="category-content glass-container">
              <p>
                <strong>BS Information Technology</strong>
              </p>
              <p>Western Mindanao State University</p>
              <p>2021 - Present</p>
            </div>
          </div>

          <div className="about-category">
            <h3 className="category-title">
              <FaUserAlt className="category-icon" /> Personal Info
            </h3>
            <div className="category-content glass-container">
              <div className="personal-info-grid">
                <div className="personal-info-item">
                  <span className="info-label">Birth Date:</span>
                  <span className="info-value">September 15, 2002</span>
                </div>
                <div className="personal-info-item">
                  <span className="info-label">Zodiac:</span>
                  <span className="info-value">Virgo</span>
                </div>
                <div className="personal-info-item">
                  <span className="info-label">Pronouns:</span>
                  <span className="info-value">He/Him</span>
                </div>
                <div className="personal-info-item">
                  <span className="info-label">Personality:</span>
                  <span className="info-value">Ambivert</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-category">
            <h3 className="category-title">
              <FaCode className="category-icon" /> Programming Journey
            </h3>
            <div className="category-content glass-container">
              <p>Started coding in 2021</p>
              <p>First language: HTML & CSS</p>
              <p>Currently focusing on React and UI/UX design</p>
            </div>
          </div>

          <div className="about-category">
            <h3 className="category-title">
              <FaLaptopCode className="category-icon" /> Career Goals
            </h3>
            <div className="category-content glass-container">
              <p>Front-end Developer</p>
              <p>UI/UX Designer</p>
              <p>Creative Technologist</p>
            </div>
          </div>
        </div>

        <div className="interests-centered">
          <h3 className="category-title">Interests</h3>
          <ul className="interests-list-centered">
            <li className="glass-container">RnB Musics</li>
            <li className="glass-container">Sci-Fi Movies</li>
            <li className="glass-container">Sunsets</li>
            <li className="glass-container">Indoor Sports</li>
            <li className="glass-container">Travel</li>
            <li className="glass-container">Books</li>
            <li className="glass-container">Photography</li>
            <li className="glass-container">Digital Art</li>
            <li className="glass-container">Web Design</li>
            <li className="glass-container">Coffee</li>
      
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
