// Optional: Add particle effect or interactive features if desired

particlesJS('particles-js', {
  particles: {
    number: {
      value: 100,
    },
    size: {
      value: 5,
    },
    move: {
      speed: 2,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    }
  },
  retina_detect: true
});
