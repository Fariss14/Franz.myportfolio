"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
  FaMicrosoft,
  FaPalette,
  FaJs,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa"
import { SiAdobe } from "react-icons/si"
import CertificateModal from "../CertificateModal"

const Skills = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalSource, setModalSource] = useState("")
  const [certificates, setCertificates] = useState([])

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

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", percentage: 90 },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", percentage: 90 },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", percentage: 70 },
    { name: "PHP", icon: <FaPhp />, color: "#777BB4", percentage: 70 },
    { name: "ReactJS", icon: <FaReact />, color: "#61DAFB", percentage: 80 },
    { name: "GitHub", icon: <FaGithub />, color: "#6e5494", percentage: 90 },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933", percentage: 50 },
    { name: "Microsoft Office", icon: <FaMicrosoft />, color: "#00A4EF", percentage: 95 },
    { name: "Adobe PS", icon: <SiAdobe />, color: "#FF0000", percentage: 85 },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E", percentage: 75 },
    { name: "Canva", icon: <FaPalette />, color: "#00C4CC", percentage: 95 },
    { name: "Tailwind CSS", icon: <FaCss3Alt />, color: "#06B6D4", percentage: 75 },
  ]

  const achievements = [
    "Civil Service Passer - Professional Level (2023)",
    "English Proficiency for International Competitiveness (EPIC) Finisher",
    "Certification of Completion - IT Internship, WMSU - 2025",
    "TESDA Training for Web Development NC-I (Dec. 2021)",
    "TESDA Training for ICT NC-II (May, 2022)",
  ]

  const linkedInCertificates = [
    {
      name: "Programming Foundations: Fundamentals",
      issueDate: "January 2023",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/Programming-Foundations-Fundamentals.pdf",
    },
    {
      name: "Microsoft Security Operations Analyst Associate SC-200 Cert Prep",
      issueDate: "February 2023",
      hours: "6 hours",
      pdfUrl: "/certificates/LinkedIn/Microsoft-Security-Operations-Analyst-Associate-SC200-Cert-Prep.pdf",
    },
    {
      name: "Certified Information Systems Security Professional (CISSP) 2024 Cert Prep",
      issueDate: "March 2023",
      hours: "8 hours",
      pdfUrl: "/certificates/LinkedIn/CISSP-2024-Cert-Prep.pdf",
    },
    {
      name: "Empathy in UX Design",
      issueDate: "April 2023",
      hours: "3 hours",
      pdfUrl: "/certificates/LinkedIn/Empathy-in-UX-Design.pdf",
    },
    {
      name: "UX Foundations: Generational Design",
      issueDate: "May 2023",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/UX-Foundations-Generational-Design.pdf",
    },
    {
      name: "UX Deep Dive: Usability Testing",
      issueDate: "June 2023",
      hours: "5 hours",
      pdfUrl: "/certificates/LinkedIn/UX-Deep-Dive-Usability-Testing.pdf",
    },
    {
      name: "UX Foundations: Storytelling",
      issueDate: "July 2023",
      hours: "3 hours",
      pdfUrl: "/certificates/LinkedIn/UX-Foundations-Storytelling.pdf",
    },
    {
      name: "UX Deep Dive: Analyzing Data",
      issueDate: "August 2023",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/UX-Deep-Dive-Analyzing-Data.pdf",
    },
    {
      name: "Sketching for UX Designers",
      issueDate: "September 2023",
      hours: "3 hours",
      pdfUrl: "/certificates/LinkedIn/Sketching-for-UX-Designers.pdf",
    },
    {
      name: "Improve Your UX Design Skills",
      issueDate: "October 2023",
      hours: "5 hours",
      pdfUrl: "/certificates/LinkedIn/Improve-Your-UX-Design-Skills.pdf",
    },
    {
      name: "Creating Your IT Strategy",
      issueDate: "November 2023",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/Creating-Your-IT-Strategy.pdf",
    },
    {
      name: "Introduction to IT Architecture",
      issueDate: "December 2023",
      hours: "6 hours",
      pdfUrl: "/certificates/LinkedIn/Introduction-to-IT-Architecture.pdf",
    },
    {
      name: "Program Management for IT Professionals",
      issueDate: "January 2024",
      hours: "5 hours",
      pdfUrl: "/certificates/LinkedIn/Program-Management-for-IT-Professionals.pdf",
    },
    {
      name: "Succeeding as a First-Time Tech Manager",
      issueDate: "February 2024",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/Succeeding-as-a-FirstTime-Tech-Manager.pdf",
    },
    {
      name: "Cybersecurity Fundamentals",
      issueDate: "March 2024",
      hours: "6 hours",
      pdfUrl: "/certificates/LinkedIn/Cybersecurity-Fundamentals.pdf",
    },
    {
      name: "Cybersecurity with Cloud Computing",
      issueDate: "April 2024",
      hours: "5 hours",
      pdfUrl: "/certificates/LinkedIn/Cybersecurity-with-Cloud-Computing.pdf",
    },
    {
      name: "TLS for Beginners: Securing Network Communications",
      issueDate: "May 2024",
      hours: "3 hours",
      pdfUrl: "/certificates/LinkedIn/TLS-for-Beginners.pdf",
    },
    {
      name: "UX Foundations: Interaction Design",
      issueDate: "June 2024",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/UX-Foundations-Interaction-Design.pdf",
    },
    {
      name: "Project Management Foundations",
      issueDate: "July 2024",
      hours: "5 hours",
      pdfUrl: "/certificates/LinkedIn/Project-Management-Foundations.pdf",
    },
    {
      name: "Principle for UX Design",
      issueDate: "August 2024",
      hours: "3 hours",
      pdfUrl: "/certificates/LinkedIn/Principle-for-UX-Design.pdf",
    },
    {
      name: "Introduction to Identity and Access Management",
      issueDate: "September 2024",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/Introduction-to-Identity-and-Access-Management.pdf",
    },
    {
      name: "IT Security Foundations: Network Security",
      issueDate: "October 2024",
      hours: "6 hours",
      pdfUrl: "/certificates/LinkedIn/IT-Security-Foundations-Network-Security.pdf",
    },
    {
      name: "User Experience (UX) for Non-Designers",
      issueDate: "November 2024",
      hours: "3 hours",
      pdfUrl: "/certificates/LinkedIn/UX-for-NonDesigners.pdf",
    },
    {
      name: "Figma Essential Training: The Basics",
      issueDate: "December 2024",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/Figma-Essential-Training.pdf",
    },
    {
      name: "IT Security Foundations: Operating System Security",
      issueDate: "January 2025",
      hours: "5 hours",
      pdfUrl: "/certificates/LinkedIn/IT-Security-OS-Security.pdf",
    },
    {
      name: "Computer Science Principles: Digital Information",
      issueDate: "February 2025",
      hours: "3 hours",
      pdfUrl: "/certificates/LinkedIn/CS-Principles-Digital-Information.pdf",
    },
    {
      name: "Computer Science Principles: The Internet",
      issueDate: "March 2025",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/CS-Principles-The-Internet.pdf",
    },
    {
      name: "Cybersecurity Foundations: Security Architecture",
      issueDate: "April 2025",
      hours: "5 hours",
      pdfUrl: "/certificates/LinkedIn/Cybersecurity-Security-Architecture.pdf",
    },
    {
      name: "Security Frameworks Fundamentals",
      issueDate: "May 2025",
      hours: "4 hours",
      pdfUrl: "/certificates/LinkedIn/Security-Frameworks-Fundamentals.pdf",
    },
    {
      name: "Cybersecurity Foundations",
      issueDate: "June 2025",
      hours: "6 hours",
      pdfUrl: "/certificates/LinkedIn/Cybersecurity-Foundations.pdf",
    },
    {
      name: "IT Security Foundations: Core Concepts",
      issueDate: "July 2025",
      hours: "5 hours",
      pdfUrl: "/certificates/LinkedIn/IT-Security-Core-Concepts.pdf",
    },
  ]

  const simplilearnCertificates = [
    {
      name: "Azure Fundamentals",
      issueDate: "January 2023",
      hours: "20 hours",
      pdfUrl: "/certificates/Simplilearn/AzureFundamentals.pdf",
    },
    {
      name: "Business Intelligence Fundamentals",
      issueDate: "February 2023",
      hours: "25 hours",
      pdfUrl: "/certificates/Simplilearn/BusinessIntelligenceFundamentals.pdf",
    },
    {
      name: "GitHub Copilot Fundamentals",
      issueDate: "March 2023",
      hours: "15 hours",
      pdfUrl: "/certificates/Simplilearn/GitHub-Copilot-Fundamentals.pdf",
    },
    {
      name: "Introduction to Cloud Security",
      issueDate: "April 2023",
      hours: "30 hours",
      pdfUrl: "/certificates/Simplilearn/Cloud-Security-Introduction.pdf",
    },
    {
      name: "Introduction to DevOps",
      issueDate: "May 2023",
      hours: "25 hours",
      pdfUrl: "/certificates/Simplilearn/DevOps-Introduction.pdf",
    },
    {
      name: "Introduction to CBAP",
      issueDate: "June 2023",
      hours: "20 hours",
      pdfUrl: "/certificates/Simplilearn/CBAP-Introduction.pdf",
    },
    {
      name: "Introduction to Data Visualization",
      issueDate: "July 2023",
      hours: "15 hours",
      pdfUrl: "/certificates/Simplilearn/Data-Visualization-Introduction.pdf",
    },
    {
      name: "Introduction to Frontend Development",
      issueDate: "August 2023",
      hours: "30 hours",
      pdfUrl: "/certificates/Simplilearn/Frontend-Development-Introduction.pdf",
    },
    {
      name: "Introduction to Paid Media Marketing",
      issueDate: "September 2023",
      hours: "20 hours",
      pdfUrl: "/certificates/Simplilearn/Paid-Media-Marketing-Introduction.pdf",
    },
    {
      name: "Introduction to PRINCE2",
      issueDate: "October 2023",
      hours: "25 hours",
      pdfUrl: "/certificates/Simplilearn/PRINCE2-Introduction.pdf",
    },
    {
      name: "Project Management 101",
      issueDate: "November 2023",
      hours: "30 hours",
      pdfUrl: "/certificates/Simplilearn/Project-Management-101.pdf",
    },
    {
      name: "Python for Beginners",
      issueDate: "December 2023",
      hours: "25 hours",
      pdfUrl: "/certificates/Simplilearn/Python-Beginners.pdf",
    },
    {
      name: "ReactJS for Beginners",
      issueDate: "January 2024",
      hours: "30 hours",
      pdfUrl: "/certificates/Simplilearn/ReactJS-Beginners.pdf",
    },
  ]

  const openLinkedInCertificates = () => {
    setCertificates(linkedInCertificates)
    setModalSource("LinkedIn")
    setShowModal(true)
  }

  const openSimplilearnCertificates = () => {
    setCertificates(simplilearnCertificates)
    setModalSource("Simplilearn")
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <motion.div className="section skills-section" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 className="section-title" variants={itemVariants}>
        My Skills
      </motion.h2>

      <motion.div className="skills-grid" variants={itemVariants}>
        {skills.map((skill, index) => (
          <motion.div key={index} className="skill-item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
            <div className="skill-percentage-container">
              <div
                className="skill-percentage-bar"
                style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
              ></div>
              <span className="skill-percentage-text">{skill.percentage}%</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="achievements" variants={itemVariants}>
        <h3>Achievements</h3>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              className="glass-container"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              {achievement}
            </motion.li>
          ))}
        </ul>

        <h3 className="certificates-heading">Certificates</h3>
        <div className="certificate-buttons">
          <motion.button
            className="certificate-button linkedin-button"
            onClick={openLinkedInCertificates}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="button-icon" /> LinkedIn Certificates ({linkedInCertificates.length})
          </motion.button>

          <motion.button
            className="certificate-button simplilearn-button"
            onClick={openSimplilearnCertificates}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGraduationCap className="button-icon" /> Simplilearn Certificates ({simplilearnCertificates.length})
          </motion.button>
        </div>
      </motion.div>

      {showModal && <CertificateModal source={modalSource} certificates={certificates} onClose={closeModal} />}
    </motion.div>
  )
}

export default Skills
