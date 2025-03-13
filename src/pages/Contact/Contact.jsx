import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact"
    >
      <h1>Contact</h1>
      <p>Connect with me.</p>
    </motion.div>
  );
};

export default Contact;