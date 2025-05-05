"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaFilePdf, FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const CertificateModal = ({ source, certificates, onClose }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const certificatesPerPage = 6

  // Hide header and footer when modal is open
  useEffect(() => {
    const navbar = document.querySelector(".navbar-container")
    const footer = document.querySelector(".footer-container")

    navbar?.style && (navbar.style.display = "none")
    footer?.style && (footer.style.display = "none")

    return () => {
      navbar?.style && (navbar.style.display = "")
      footer?.style && (footer.style.display = "")
    }
  }, [])

  // Filter and pagination calculations
  const filteredCertificates = certificates.filter(cert => 
    cert.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastCertificate = currentPage * certificatesPerPage
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage
  const currentCertificates = filteredCertificates.slice(indexOfFirstCertificate, indexOfLastCertificate)
  const totalPages = Math.ceil(filteredCertificates.length / certificatesPerPage)

  // Handlers
  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate)
  }

  const closePreview = () => setSelectedCertificate(null)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const nextPage = () => currentPage < totalPages && setCurrentPage(p => p + 1)
  const prevPage = () => currentPage > 1 && setCurrentPage(p => p - 1)

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
        {/* Modal Header */}
        <div className="certificate-modal-header">
          <h3>{source} Certificates</h3>
          <button className="close-button" onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>
        </div>

        {/* Search Input */}
        <div className="certificate-search-container">
          <div className="search-input-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={handleSearch}
              className="certificate-search-input"
              aria-label="Search certificates"
            />
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="certificate-grid-container">
          {currentCertificates.map((cert, index) => (
            <div 
              key={`${cert.name}-${index}`} 
              className="certificate-card"
              onClick={() => handleCertificateClick(cert)}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.name} certificate`}
            >
              <div className="certificate-card-icon">
                <FaFilePdf aria-hidden="true" />
              </div>
              <div className="certificate-card-name">{cert.name}</div>
            </div>
          ))}
          {currentCertificates.length === 0 && (
            <div className="no-certificates-message">No certificates match your search.</div>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="certificate-pagination">
          <button 
            className="pagination-button" 
            onClick={prevPage} 
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            className="pagination-button" 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <FaChevronRight />
          </button>
        </div>
      </motion.div>

      {/* PDF Preview Modal */}
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
                <button 
                  className="close-button" 
                  onClick={closePreview}
                  aria-label="Close preview"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="certificate-preview-content">
                <iframe 
                  src={selectedCertificate.pdfUrl} 
                  title={`PDF Viewer - ${selectedCertificate.name}`}
                  width="100%" 
                  height="500px"
                  aria-label="PDF document viewer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default CertificateModal
