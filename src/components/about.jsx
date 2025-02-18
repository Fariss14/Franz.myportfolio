import React from "react";
import "../assets/styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        <div className="about-box">
          <h3 className="about-subtitle">What I do</h3>
          <p className="about-text">
            I specialize in front-end development and graphic design, creating visually appealing and user-friendly digital experiences.
          </p>
        </div>

        <div className="about-box">
          <h3 className="about-subtitle">Skills</h3>
          <p className="about-skill"><strong>Graphic Design</strong></p>
          <p className="about-text">
            Proficient in Photoshop, Canva, and other design tools for creating engaging visuals.
          </p>

          <p className="about-skill"><strong>Web Design</strong></p>
          <p className="about-text">
            Skilled in HTML, CSS, and basic UI/UX principles to enhance user experience.
          </p>

          <p className="about-skill"><strong>Creativity & Aesthetics</strong></p>
          <p className="about-text">
            Passionate about blending technology with design to produce seamless layouts and interactive content.
          </p>
        </div>

        <div className="about-box">
          <h3 className="about-subtitle">Goal</h3>
          <p className="about-text">
            To enhance user interactions through well-designed visuals, intuitive interfaces, and creative digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
