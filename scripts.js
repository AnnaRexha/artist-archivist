// Search functionality
document.getElementById("searchBox").addEventListener("input", function (e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".entry").forEach(entry => {
    entry.style.display = entry.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
});

// Optional: Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image hover effect (optional: Add a subtle hover effect)
document.querySelectorAll('.entry').forEach(entry => {
  entry.addEventListener('mouseover', function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s ease";
  });
  entry.addEventListener('mouseout', function () {
    this.style.transform = "scale(1)";
  });
});

// Adjust particles.js settings (if you're using it for the background)
if (typeof particlesJS !== 'undefined') {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: window.innerWidth < 768 ? 30 : 100, // Adjust particles for mobile
      },
      size: {
        value: window.innerWidth < 768 ? 3 : 5, // Smaller particles on mobile
      },
      move: {
        speed: window.innerWidth < 768 ? 1 : 2, // Slower particles on mobile
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
}
