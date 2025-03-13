import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import me from '../../assets/me.jpg';

const About = () => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    'Aspiring UI/UX Designer',
    'Front-End Developer',
    'Ug ako nalang diay?',
    'Unta ako nalang',
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    if (currentIndex < currentText.length) {
     
      const timeout = setTimeout(() => {
        setTypingText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); 

      return () => clearTimeout(timeout);
    } else {
    
      const timeout = setTimeout(() => {
        setTypingText('');
        setCurrentIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length); 
      }, 1000); 

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, texts]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <div className="about-header">
        <h1>About Me</h1>
        <img src={me} alt="Franz Nathaniel R. Valdez" className="profile-photo" />
      </div>

      <div className="about-content">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ color: '#9340ff' }}
        >
          Franz Nathaniel R. Valdez
        </motion.h2>

        
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            color: '#007BFF',
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            borderRight: '2px solid #007BFF',
            width: 'fit-content',
            margin: '0 auto',
          }}
        >
          {typingText}
          <span style={{ opacity: 0 }}>|</span> {/* Invisible cursor */}
        </motion.h3>

        <p>
          I aspire to be a skilled UI/UX Designer, an innovative Front-End Developer, and so much more. 
          I'm all about blending creativity with functionality to create experiences that truly connect with people.
        </p>

        <section className="about-section">
          <h4>Few Facts About Me</h4>
          <p>
            I'm just an easygoing guy who loves enjoying the little things in life. You'll often find me lost in a good book, 
            binge-watching my latest favorite series, or out on the court playing badminton or volleyball to blow off some steam. 
            I'm also a huge fan of sunsets—they just hit different, don't they? Hanging out with friends is my go-to way to unwind 
            because nothing beats good company and good laughs. I also dream of traveling to new places and experiencing different 
            vibes, but unfortunately, my motion sickness loves to ruin that dream. Seriously, it's like my body has a personal 
            vendetta against long trips—ugh!
          </p>
        </section>

        <div className="about-grid">
          <section className="about-section">
            <h4>Interests</h4>
            <ul>
              <li>Music</li>
              <li>Movies/Series</li>
              <li>Sunsets</li>
              <li>Sports</li>
              <li>Travel</li>
              <li>Books</li>
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;