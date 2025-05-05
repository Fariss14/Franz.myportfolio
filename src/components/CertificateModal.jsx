import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaFilePdf, FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const CertificateModal = ({ source, certificates, onClose }) => {
  // Hide header and footer when modal is open
  useEffect(() => {
    const navbar = document.querySelector(".navbar-container")
    const footer = document.querySelector(".footer-container")

    if (navbar) navbar.style.display = "none"
    if (footer) footer.style.display = "none"

    return () => {
      if (navbar) navbar.style.display = ""
      if (footer) footer.style.display = ""
    }
  }, [])

  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const certificatesPerPage = 6

  // Filter certificates based on search term
  const filteredCertificates = certificates.filter((cert) => cert.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // Calculate pagination
  const indexOfLastCertificate = currentPage * certificatesPerPage
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage
  const currentCertificates = filteredCertificates.slice(indexOfFirstCertificate, indexOfLastCertificate)
  const totalPages = Math.ceil(filteredCertificates.length / certificatesPerPage)

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate)
  }

  const closePreview = () => {
    setSelectedCertificate(null)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Reset to first page when searching
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <motion.div
      className="certificate-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="certificate-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <div className="certificate-modal-header">
          <h3>{source} Certificates</h3>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="certificate-search-container">
          <div className="search-input-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={handleSearch}
              className="certificate-search-input"
            />
          </div>
        </div>

        <div className="certificate-grid-container" style={{ minHeight: "300px" }}>
          {currentCertificates.map((cert, index) => (
            <div key={index} className="certificate-card" onClick={() => handleCertificateClick(cert)}>
              <div className="certificate-card-icon">
                <FaFilePdf />
              </div>
              <div className="certificate-card-name">{cert.name}</div>
            </div>
          ))}
          {currentCertificates.length === 0 && (
            <div className="no-certificates-message">No certificates match your search.</div>
          )}
        </div>

        <div className="certificate-pagination">
          <button className="pagination-button" onClick={prevPage} disabled={currentPage === 1}>
            <FaChevronLeft />
          </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button className="pagination-button" onClick={nextPage} disabled={currentPage === totalPages}>
            <FaChevronRight />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-preview-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="certificate-preview"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="certificate-preview-header">
                <h3>{selectedCertificate.name}</h3>
                <button className="close-button" onClick={closePreview}>
                  <FaTimes />
                </button>
              </div>
              <div className="certificate-preview-content">
                <iframe src={selectedCertificate.pdfUrl} title={selectedCertificate.name} width="100%" height="500px" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default CertificateModal
