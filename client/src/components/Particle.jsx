// IMPORTING IN REACT TSPARTICLES FOR ANIMATED BACKGROUND
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// FUNCTION TO INITIALIZE BACKGROUND PARTICLE EFFECT
function Particle() {
  const ParticlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  // RENDERING/STYLING FOR ANIMATED BACKGROUND
  return (
    <Particles
      id="tsparticles"
      init={ParticlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
