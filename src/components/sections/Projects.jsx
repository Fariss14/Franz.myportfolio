"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
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

  const projects = [
    {
      title: "ViaJe: An Automated Notification Mobile Application for Commuters",
      category: "Capstone and Research",
      role: "Project Manager, Tester, Documentation",
      team: "Rogie Gabotero and Milbert Falcasantos",
      description: "A mobile application that provides automated notifications for commuters.",
      image: "/projects-images/viaje.png",
      github: "https://github.com/Fariss14/Rider",
      demo: "http://viajeride.xscpry.com/",
    },
    {
      title: "Lines Hub Online Sales and Inventory System",
      category: "Software Engineering",
      role: "Project Manager, Tester, Documentation",
      team: "Ronson Delena Jr. and Milbert Falcasantos",
      description: "An online sales and inventory system for Lines Hub.",
      image: "/projects-images/lineshub.png",
      github: "https://github.com/jademeeoow/lineshub.git",
      demo: "https://bis.free.nf/",
    },
    {
      title: "BidWave: An Auction System",
      category: "Ecommerce Project",
      role: "Project Manager",
      team: "Quecia Mae Brilliantes and Milbert Falcasantos",
      description: "An online auction system for various products.",
      image: "/projects-images/bidwave.png",
      github: "https://github.com/username/bidwave",
    },
    {
      title: "CrimsonQuest",
      category: "Sir Jason Subject",
      role: "Project Manager",
      team: "Raiza Beligolo and Mark Larenz Tabotabo",
      description: "A quest-based learning platform.",
      image: "/projects-images/crimsonquest.png",
      github: "https://github.com/larenzzx/CrimsonQuest",
    },
    {
      title: "Mini Pokemon Battle App",
      category: "Sir Rey Subject",
      role: "Front-end Dev",
      team: "Individual",
      description: "A quest-based learning platform.",
      image: "/projects-images/pokebattle.png",
      github: "https://pransxzy-mini-pokemon-battle-app.up.railway.app/",
      demo: "https://github.com/Fariss14/Mini-Pokemon-App",
    },
    {
      title: "To-Do-List App",
      category: "Sir Rey Subject",
      role: "Front-End Dev",
      team: "Individual",
      description: "A quest-based learning platform.",
      image: "/projects-images/todo.png",
      github: "https://github.com/Fariss14/to-do-list-app",
      demo: "https://frooxy-todolist.netlify.app/",
    },
  ]

  return (
    <motion.div className="section projects-section" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 className="section-title" variants={itemVariants}>
        My Projects
      </motion.h2>

      <motion.div className="projects-container" variants={itemVariants}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glass-container"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-role">
                <strong>Role:</strong> {project.role}
              </p>
              <p className="project-team">
                <strong>Team:</strong> {project.team}
              </p>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
