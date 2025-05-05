import { motion } from "framer-motion"
import { FaBook, FaBrain, FaFlask, FaRocket } from "react-icons/fa"

const Experiences = () => {
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
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const timelineExperiences = [
    {
      year: "1st Year",
      icon: <FaBook />,
      title: "Foundations",
      technologies: "C++, HTML, CSS",
      description:
        "Developed foundational programming skills with C++. Built basic static websites using HTML and CSS.",
      color: "#4fffb0",
    },
    {
      year: "2nd Year",
      icon: <FaBrain />,
      title: "Core Programming",
      technologies: "Assembly, JavaScript, Python",
      description:
        "Learned low-level Assembly programming. Gained experience with JavaScript for interactivity and Python for scripting and logic building.",
      color: "#8a4fff",
    },
    {
      year: "3rd Year",
      icon: <FaFlask />,
      title: "Advanced Development",
      technologies: "PHP, VB.NET, Software Engineering, Machine Learning, Django",
      description:
        "Worked with server-side technologies and object-oriented development in VB.NET. Studied software development life cycles. Began exploring machine learning and web apps using Django.",
      color: "#ff4f8a",
    },
    {
      year: "4th Year",
      icon: <FaRocket />,
      title: "Professional Skills",
      technologies: "ReactJS, GitHub, Tailwind CSS, Capstone Project",
      description:
        "Built modern user interfaces using ReactJS and styled them with Tailwind CSS. Used GitHub for version control and team collaboration. Capstone Project: Applied cumulative knowledge to design and develop a full-stack web application, integrating frontend, backend, and deployment best practices.",
      color: "#ff9f4f",
    },
  ]

  return (
    <motion.div className="section experiences-section" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 className="section-title" variants={itemVariants}>
        My Experiences
      </motion.h2>

      <motion.div
        className="timeline-container"
        variants={itemVariants}
        style={{
          position: "relative",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px 0",
        }}
      >
        {/* Vertical line */}
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "4px",
            height: "100%",
            background: "linear-gradient(to bottom, #4fffb0, #8a4fff, #ff4f8a, #ff9f4f)",
            borderRadius: "2px",
            zIndex: 0,
          }}
        ></div>

        {timelineExperiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
          >
            {/* Timeline dot */}
            <div
              className="timeline-dot"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: exp.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "20px",
                boxShadow: `0 0 15px ${exp.color}`,
                zIndex: 2,
              }}
            >
              {exp.icon}
            </div>

            {/* Content */}
            <div
              className="timeline-content"
              style={{
                width: "45%",
                padding: "20px",
                background: "rgba(30, 15, 60, 0.5)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                border: `1px solid ${exp.color}`,
                boxShadow: `0 5px 15px rgba(0, 0, 0, 0.2)`,
                position: "relative",
                marginLeft: index % 2 === 0 ? "auto" : "0",
                marginRight: index % 2 === 0 ? "0" : "auto",
              }}
            >
              <div
                className="timeline-arrow"
                style={{
                  position: "absolute",
                  top: "20px",
                  [index % 2 === 0 ? "left" : "right"]: "-10px",
                  width: "20px",
                  height: "20px",
                  background: "rgba(30, 15, 60, 0.5)",
                  transform: "rotate(45deg)",
                  border: `1px solid ${exp.color}`,
                  borderTop: index % 2 === 0 ? "none" : `1px solid ${exp.color}`,
                  borderLeft: index % 2 === 0 ? "none" : `1px solid ${exp.color}`,
                  borderRight: index % 2 === 0 ? `1px solid ${exp.color}` : "none",
                  borderBottom: index % 2 === 0 ? `1px solid ${exp.color}` : "none",
                }}
              ></div>

              <h3
                style={{
                  color: exp.color,
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  className="timeline-year"
                  style={{
                    background: exp.color,
                    color: "#13072e",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {exp.year}
                </span>
                {exp.title}
              </h3>

              <div
                style={{
                  background: "rgba(0, 0, 0, 0.2)",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  marginBottom: "15px",
                  display: "inline-block",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#ccc" }}>Technologies:</span> {exp.technologies}
              </div>

              <p style={{ lineHeight: "1.6" }}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Experiences
