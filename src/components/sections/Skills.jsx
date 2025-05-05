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

  // LinkedIn Certificates (kebab-case filenames)
  const linkedInCertificates = [
    { name: "Programming Foundations: Fundamentals", issueDate: "2023-01", hours: "4h", pdfUrl: "/certificates/linkedin/programming-foundations-fundamentals.pdf" },
    { name: "Microsoft Security Operations Analyst", issueDate: "2023-02", hours: "6h", pdfUrl: "/certificates/linkedin/microsoft-security-operations-analyst.pdf" },
    { name: "CISSP 2024 Cert Prep", issueDate: "2023-03", hours: "8h", pdfUrl: "/certificates/linkedin/cissp-2024-cert-prep.pdf" },
    { name: "Empathy in UX Design", issueDate: "2023-04", hours: "3h", pdfUrl: "/certificates/linkedin/empathy-in-ux-design.pdf" },
    { name: "UX Foundations: Generational Design", issueDate: "2023-05", hours: "4h", pdfUrl: "/certificates/linkedin/ux-foundations-generational-design.pdf" },
    { name: "UX Deep Dive: Usability Testing", issueDate: "2023-06", hours: "5h", pdfUrl: "/certificates/linkedin/ux-deep-dive-usability-testing.pdf" },
    { name: "UX Foundations: Storytelling", issueDate: "2023-07", hours: "3h", pdfUrl: "/certificates/linkedin/ux-foundations-storytelling.pdf" },
    { name: "UX Deep Dive: Analyzing Data", issueDate: "2023-08", hours: "4h", pdfUrl: "/certificates/linkedin/ux-deep-dive-analyzing-data.pdf" },
    { name: "Sketching for UX Designers", issueDate: "2023-09", hours: "3h", pdfUrl: "/certificates/linkedin/sketching-for-ux-designers.pdf" },
    { name: "Improve Your UX Design Skills", issueDate: "2023-10", hours: "5h", pdfUrl: "/certificates/linkedin/improve-ux-design-skills.pdf" },
    { name: "Creating Your IT Strategy", issueDate: "2023-11", hours: "4h", pdfUrl: "/certificates/linkedin/creating-it-strategy.pdf" },
    { name: "Introduction to IT Architecture", issueDate: "2023-12", hours: "6h", pdfUrl: "/certificates/linkedin/intro-it-architecture.pdf" },
    { name: "Program Management for IT Professionals", issueDate: "2024-01", hours: "5h", pdfUrl: "/certificates/linkedin/program-management-it-professionals.pdf" },
    { name: "First-Time Tech Manager Success", issueDate: "2024-02", hours: "4h", pdfUrl: "/certificates/linkedin/first-time-tech-manager-success.pdf" },
    { name: "Cybersecurity Fundamentals", issueDate: "2024-03", hours: "6h", pdfUrl: "/certificates/linkedin/cybersecurity-fundamentals.pdf" },
    { name: "Cybersecurity with Cloud Computing", issueDate: "2024-04", hours: "5h", pdfUrl: "/certificates/linkedin/cybersecurity-cloud-computing.pdf" },
    { name: "TLS for Beginners", issueDate: "2024-05", hours: "3h", pdfUrl: "/certificates/linkedin/tls-for-beginners.pdf" },
    { name: "UX Foundations: Interaction Design", issueDate: "2024-06", hours: "4h", pdfUrl: "/certificates/linkedin/ux-interaction-design.pdf" },
    { name: "Project Management Foundations", issueDate: "2024-07", hours: "5h", pdfUrl: "/certificates/linkedin/project-management-foundations.pdf" },
    { name: "Principle for UX Design", issueDate: "2024-08", hours: "3h", pdfUrl: "/certificates/linkedin/principle-ux-design.pdf" },
    { name: "Identity and Access Management", issueDate: "2024-09", hours: "4h", pdfUrl: "/certificates/linkedin/identity-access-management.pdf" },
    { name: "IT Security: Network Security", issueDate: "2024-10", hours: "6h", pdfUrl: "/certificates/linkedin/it-security-network.pdf" },
    { name: "UX for Non-Designers", issueDate: "2024-11", hours: "3h", pdfUrl: "/certificates/linkedin/ux-non-designers.pdf" },
    { name: "Figma Essential Training", issueDate: "2024-12", hours: "4h", pdfUrl: "/certificates/linkedin/figma-essential-training.pdf" },
    { name: "IT Security: OS Security", issueDate: "2025-01", hours: "5h", pdfUrl: "/certificates/linkedin/it-security-os.pdf" },
    { name: "CS Principles: Digital Information", issueDate: "2025-02", hours: "3h", pdfUrl: "/certificates/linkedin/cs-digital-information.pdf" },
    { name: "CS Principles: The Internet", issueDate: "2025-03", hours: "4h", pdfUrl: "/certificates/linkedin/cs-the-internet.pdf" },
    { name: "Cybersecurity Security Architecture", issueDate: "2025-04", hours: "5h", pdfUrl: "/certificates/linkedin/cybersecurity-architecture.pdf" },
    { name: "Security Frameworks Fundamentals", issueDate: "2025-05", hours: "4h", pdfUrl: "/certificates/linkedin/security-frameworks.pdf" },
    { name: "IT Security Core Concepts", issueDate: "2025-07", hours: "5h", pdfUrl: "/certificates/linkedin/it-security-core-concepts.pdf" },
  ]

  // Simplilearn Certificates (kebab-case filenames)
  const simplilearnCertificates = [
    { name: "Azure Fundamentals", issueDate: "2023-01", hours: "20h", pdfUrl: "/certificates/simplilearn/azure-fundamentals.pdf" },
    { name: "Business Intelligence Fundamentals", issueDate: "2023-02", hours: "25h", pdfUrl: "/certificates/simplilearn/business-intelligence.pdf" },
    { name: "GitHub Copilot Fundamentals", issueDate: "2023-03", hours: "15h", pdfUrl: "/certificates/simplilearn/github-copilot.pdf" },
    { name: "Cloud Security Introduction", issueDate: "2023-04", hours: "30h", pdfUrl: "/certificates/simplilearn/cloud-security-intro.pdf" },
    { name: "DevOps Introduction", issueDate: "2023-05", hours: "25h", pdfUrl: "/certificates/simplilearn/devops-intro.pdf" },
    { name: "CBAP Introduction", issueDate: "2023-06", hours: "20h", pdfUrl: "/certificates/simplilearn/cbap-intro.pdf" },
    { name: "Data Visualization Introduction", issueDate: "2023-07", hours: "15h", pdfUrl: "/certificates/simplilearn/data-visualization.pdf" },
    { name: "Frontend Development Introduction", issueDate: "2023-08", hours: "30h", pdfUrl: "/certificates/simplilearn/frontend-dev-intro.pdf" },
    { name: "Paid Media Marketing Introduction", issueDate: "2023-09", hours: "20h", pdfUrl: "/certificates/simplilearn/paid-media-marketing.pdf" },
    { name: "PRINCE2 Introduction", issueDate: "2023-10", hours: "25h", pdfUrl: "/certificates/simplilearn/prince2-intro.pdf" },
    { name: "Project Management 101", issueDate: "2023-11", hours: "30h", pdfUrl: "/certificates/simplilearn/project-management-101.pdf" },
    { name: "Python for Beginners", issueDate: "2023-12", hours: "25h", pdfUrl: "/certificates/simplilearn/python-beginners.pdf" },
    { name: "ReactJS for Beginners", issueDate: "2024-01", hours: "30h", pdfUrl: "/certificates/simplilearn/reactjs-beginners.pdf" },
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

  const closeModal = () => setShowModal(false)

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
