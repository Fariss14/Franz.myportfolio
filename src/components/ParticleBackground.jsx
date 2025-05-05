import { useCallback, useEffect, useState } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const ParticleBackground = ({ blurred = false }) => {
  console.log("ParticleBackground component rendering")
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
 
    if (typeof window !== "undefined") {
      setIsLoaded(true)
    }
  }, [])

  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing tsparticles")
    try {
      await loadFull(engine)
      console.log("tsparticles loaded successfully")
    } catch (error) {
      console.error("Error loading tsparticles:", error)
      setIsError(true)
    }
  }, [])

  if (!isLoaded || isError) {
    console.log("ParticleBackground not loaded or error occurred")
 
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #13072e, #3f2182)",
          zIndex: -1,
        }}
      />
    )
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: blurred ? 40 : 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: blurred ? 0.2 : 0.5,
            random: true,
          },
          size: {
            value: blurred ? 2 : 3,
            random: true,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: blurred ? 0.1 : 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: blurred ? 0.8 : 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5,
              },
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  )
}

export default ParticleBackground
