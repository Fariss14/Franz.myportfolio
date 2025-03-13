import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import profile from '../../assets/profile.png';
import './Hero.css'; 

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="hero" 
    >
      {}
      <div className="description">
        <h1>Hello there!</h1>
       
        <motion.h2
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 10px rgba(0, 123, 255, 0.8)', 
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }} 
        >
          I am{' '}
          <motion.span  
            style={{ color: '#9340ff' }} 
            whileHover={{
              color: '#007BFF', 
            }}
            transition={{ duration: 0.3 }} 
          > 
            Pransxzy
          </motion.span>
        </motion.h2>
        <p>
          An aspiring & hardworking front-end developer from WMSU who creates
          user-friendly websites. Passionate about design and making things work
          smoothly.
        </p>

     
        <div className="social-icons">
          <motion.a
            href="https://www.linkedin.com/in/Franz-Valdez"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin className="icon" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/franzxvaldez14"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaFacebook className="icon" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/pransxzy.me" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaInstagram className="icon" /> 
          </motion.a>
          <motion.a
            href="mailto:franzxvaldez@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope className="icon" />
          </motion.a>
          <motion.a
            href="https://github.com/Fariss14"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub className="icon" />
          </motion.a>
        </div>
      </div>

    
      <div className="image-container">
        <motion.img
          src={profile}
          alt="Profile"
          className="profile-image"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }} 
          transition={{
            duration: 3, 
            repeat: Infinity, 
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
};

export default Hero;