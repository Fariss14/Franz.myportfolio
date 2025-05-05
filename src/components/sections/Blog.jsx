"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa"

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  // const [selectedImage, setSelectedImage] = useState(null)

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

  const blogPosts = [
    {
      id: "day-one",
      title: "Tracing Roots: A Journey Through the Historic Heart of Manila",
      date: "Monday, April 7, 2025",
      location: "City Tour",
      coordinates: { lat: 14.5995, lng: 120.9842 }, // Manila coordinates
      itinerary: "Intramuros, Fort Santiago, Rizal Park, Manila Cathedral, San Agustin Church, CCP, Mall of Asia",
      description:
        "Our first day began with an exciting exploration of Manila's historic sites. We wandered through the ancient walls of Intramuros, feeling the Spanish colonial influence in every cobblestone. Fort Santiago revealed stories of heroes past, while Rizal Park offered a moment of reflection on our national identity. The grandeur of Manila Cathedral and San Agustin Church left us in awe of their architectural beauty and spiritual significance. As evening approached, we visited the Cultural Center of the Philippines before ending our day with shopping and dining at the massive Mall of Asia, watching the sunset paint the Manila Bay with golden hues.",
      image: "/day-one.png",
    },
    {
      id: "day-two",
      title: "Secured and Systematic: Exploring Subic’s Technological Edge",
      date: "Tuesday, April 8, 2025",
      location: "Subic Bay, Olongapo",
      coordinates: { lat: 14.7924, lng: 120.2818 }, // Subic Bay coordinates
      itinerary:
        "SBMA Law Enforcement Department - Communication Branch, SBMA Seaport Department (Vessel Traffic Management System)",
      description:
        "Day two took us to the former US Naval Base at Subic Bay, now transformed into a thriving economic zone. We were privileged to visit the SBMA Law Enforcement Department's Communication Branch, where we witnessed cutting-edge technology in action. The highlight was our tour of the Vessel Traffic Management System at the Seaport Department, where we observed real-time monitoring of maritime traffic through an impressive array of radar systems and communication equipment. The officers explained how they coordinate vessel movements and ensure safety in one of the Philippines' busiest ports. This hands-on experience showed us how IT systems are crucial for national security and economic operations.",
      image: "/day-two.png",
    },
    {
      id: "day-three",
      title: "Legacy and Innovation: A Tribute to Philippine History and Evolution",
      date: "Wednesday, April 9, 2025",
      location: "Museum Tour",
      coordinates: { lat: 14.5837, lng: 121.0502 }, // National Museum coordinates
      itinerary: "Museo ni Manuel L. Quezon, National Museum of Natural History",
      description:
        "Our third day was a journey through time and nature as we visited two remarkable museums. At Museo ni Manuel L. Quezon, we delved into the life of the Commonwealth President who shaped modern Philippines. Personal artifacts, letters, and multimedia presentations brought his era to life, helping us understand his vision for Philippine independence. Later, the National Museum of Natural History captivated us with its stunning Tree of Life centerpiece and comprehensive exhibits on Philippine biodiversity. From prehistoric fossils to living ecosystems, we gained a deeper appreciation for our country's natural heritage and the importance of conservation efforts in preserving these treasures for future generations.",
      image: "/day-three.png",
    },
    {
      id: "day-four",
      title: "From Currency to Current: Inside the Halls of Power and Progress",
      date: "Thursday, April 10, 2025",
      location: "Manila Tour",
      coordinates: { lat: 14.6091, lng: 121.0223 }, // Bangko Sentral coordinates
      itinerary: "Bangko Sentral ng Pilipinas, Hytec Power Inc., Trinoma Mall",
      description:
        "Day four offered insights into the financial and energy sectors of the Philippines. Our morning at Bangko Sentral ng Pilipinas was fascinating as we toured the Money Museum and learned about monetary policy, currency production, and the banking system that underpins our economy. The security features of Philippine banknotes were particularly interesting from a technological perspective. In the afternoon, Hytec Power Inc. welcomed us to their facility where engineers demonstrated modern power generation and distribution systems. We saw firsthand how software and hardware integrate to manage energy resources efficiently. The day concluded with some leisure time at Trinoma Mall, where we reflected on how technology touches every aspect of modern infrastructure.",
      image: "/day-four.png",
    },
    {
      id: "day-five",
      title: "Smart Mobility: Inside the Pulse of Urban Transport",
      date: "Friday, April 11, 2025",
      location: "Transportation Tour",
      coordinates: { lat: 14.6042, lng: 121.0122 }, // LRT Line 2 coordinates
      itinerary: "Light Rail Transit Authority - Line 2, Traffic Engineering Center - MMDA",
      description:
        "Transportation technology was our focus on day five as we explored urban mobility solutions in Metro Manila. The Light Rail Transit Authority gave us a behind-the-scenes tour of Line 2 operations, including the control center where automated systems coordinate train movements with precision timing. Engineers explained the communication networks, power systems, and safety protocols that keep thousands of commuters moving daily. Later, at the MMDA's Traffic Engineering Center, we were amazed by the wall of monitors displaying live feeds from hundreds of CCTV cameras across the metropolis. The data analytics tools they use to predict traffic patterns and respond to incidents demonstrated practical applications of the IT concepts we've been studying.",
      image: "/day-five.png",
    },
    {
      id: "day-six",
      title: "Dreams on the Hills: A Cold Embrace from the City of Pines",
      date: "Saturday, April 12, 2025",
      location: "Baguio City Tour",
      coordinates: { lat: 16.4023, lng: 120.596 }, // Baguio City coordinates
      itinerary:
        "Strawberry Farm, Chinese Bell Church, Philippine Military Academy, Mines View Park, Wrightpark, Mansion House, Burhham Park",
      description:
        "The cool mountain air of Baguio City welcomed us on day six as we escaped the lowland heat. Our day began with delight at the La Trinidad Strawberry Farm, where we picked fresh berries and sampled strawberry treats. The tranquil grounds of the Chinese Bell Church offered a cultural contrast, with its blend of Eastern architectural elements and spiritual symbolism. The discipline and precision of cadets at the Philippine Military Academy impressed us during the parade, while Mines View Park provided breathtaking vistas of the Cordillera mountains. We toured the stately Mansion House with its manicured gardens before ending our day with boat rides and leisurely walks around the picturesque Burnham Park lake.",
      image: "/day-six.png",
    },
    {
      id: "day-seven",
      title: "Free to Roam: Personal Discoveries in the City of Pines",
      date: "Sunday, April 13, 2025",
      location: "Bagiuo City - Free Day",
      coordinates: { lat: 16.4023, lng: 120.596 }, // Baguio City coordinates
      itinerary: "Free day to explore Baguio City",
      description:
        "Our final day offered freedom to explore Baguio City at our own pace. Some of us visited the BenCab Museum to appreciate works by the National Artist, while others hiked through Camp John Hay's pine-scented trails. Small groups explored the artistic community at Tam-awan Village, where traditional Cordillera huts showcase indigenous culture. Many of us couldn't resist shopping for souvenirs at the public market, bargaining for silver jewelry, woven textiles, and wood carvings. We reunited in the evening to share stories over a farewell dinner featuring Baguio specialties. As night fell, we packed our bags with memories and mementos, ready to return to Zamboanga with new perspectives and friendships strengthened by our shared adventures.",
      image: "/day-seven.png",
    },
  ]

  // Gallery images for the marquee
  const galleryImages = [
    "/gallery/random1.png",
    "/gallery/random2.png",
    "/gallery/random3.png",
    "/gallery/random4.png",
    "/gallery/random5.png",
    "/gallery/random6.png",
    "/gallery/random7.png",
    "/gallery/random8.png",
    "/gallery/random9.png",
    "/gallery/random10.png",
    "/gallery/random11.png",
    "/gallery/random12.png",
    "/gallery/random13.png",
    "/gallery/random14.png",
    "/gallery/random15.png",
    "/gallery/random16.png",
    "/gallery/random17.png",
    "/gallery/random18.png",
    "/gallery/random19.png",
    "/gallery/random20.png",
    "/gallery/random21.png",
    "/gallery/random22.png",
    "/gallery/random23.png",
    "/gallery/random24.png",
  ]

  // const closeGalleryImage = () => {
  //   setSelectedImage(null)
  // }

  return (
    <motion.div className="section blog-section" variants={containerVariants} initial="hidden" animate="visible">
      <div className="blog-header-background">
        <motion.div className="blog-header" variants={itemVariants}>
          <motion.h2 className="section-title professional-title" variants={itemVariants}>
            BSIT Educational Field Trip & Seminar
          </motion.h2>
          <motion.h3 className="blog-subtitle professional-subtitle" variants={itemVariants}>
            Batch 2024-2025
          </motion.h3>
        </motion.div>
      </div>

      <motion.h3 className="journey-highlights-title" variants={itemVariants}>
        Memory Cache: Tour Highlights
      </motion.h3>

      <motion.div className="blog-posts-container" variants={itemVariants}>
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="blog-card"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/main/blog/${post.id}`} className="blog-link">
              <div className="blog-image">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `/placeholder.svg?height=200&width=300`
                  }}
                />
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      className="blog-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>Click to view details</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-date">{post.date}</p>
                <div className="blog-location-container">
                  <FaMapMarkerAlt className="location-icon" />
                  <p className="blog-location">{post.location}</p>
                </div>
                <p className="blog-preview">
                  {post.description.substring(0, 150)}... <span className="read-more">Read more</span>
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Photo Gallery with Horizontal Scrolling Animation */}
      <motion.div className="photo-gallery-section" variants={itemVariants}>
        <h3 className="gallery-title">Snapshots of Insights</h3>

        <div className="gallery-scroll-container">
          <div className="gallery-scroll-track">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % 5), duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `/placeholder.svg?height=150&width=200`
                  }}
                />
              </motion.div>
            ))}

            {/* Duplicate images for continuous scrolling effect */}
            {galleryImages.map((image, index) => (
              <motion.div
                key={`duplicate-${index}`}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % 5), duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `/placeholder.svg?height=150&width=200`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gallery Modal */}
      {/* <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="gallery-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button className="gallery-modal-close" onClick={closeGalleryImage}>
                <FaTimes />
              </button>
              <img src={selectedImage || "/placeholder.svg"} alt="Gallery image" className="gallery-modal-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.div>
  )
}

export default Blog
