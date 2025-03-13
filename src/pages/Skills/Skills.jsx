import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="skills"
    >
      <h1>Skills</h1>
      <p>My Skills.</p>
    </motion.div>
  );
};

export default Skills;