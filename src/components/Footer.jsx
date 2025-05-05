import { motion } from "framer-motion"
import { FaHeart } from "react-icons/fa"

const Footer = () => {
  return (
    <motion.footer className="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
      <p>&copy; {new Date().getFullYear()} Franz Nathaniel R. Valdez. All rights reserved.</p>
    </motion.footer>
  )
}

export default Footer
