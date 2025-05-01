// Search functionality
document.getElementById("searchBox").addEventListener("input", function (e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".entry").forEach(entry => {
    entry.style.display = entry.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
});

// Flip card interaction (optional for improving UX with mouse hover)
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("mouseover", function () {
    const flipInner = card.querySelector(".flip-inner");
    if (flipInner) {
      flipInner.style.transition = "transform 0.8s";
      flipInner.style.transform = "rotateY(180deg)";
    }
  });

  card.addEventListener("mouseout", function () {
    const flipInner = card.querySelector(".flip-inner");
    if (flipInner) {
      flipInner.style.transition = "transform 0.8s";
      flipInner.style.transform = "rotateY(0deg)";
    }
  });
});

// Adding active state for entries
document.querySelectorAll(".entry").forEach(entry => {
  entry.addEventListener("click", function () {
    // Toggle a class for active or focused card (could be styled differently in CSS)
    entry.classList.toggle("active");

    // Optionally, deactivate other entries when one is activated
    document.querySelectorAll(".entry").forEach(otherEntry => {
      if (otherEntry !== entry) {
        otherEntry.classList.remove("active");
      }
    });
  });
});

// Optionally, if you want to allow click to expand story content in a modal or some detail panel
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", function () {
    const backContent = card.querySelector(".flip-back .story-content");
    if (backContent) {
      // Example: open in a modal or expand the content within the same page
      alert("Showing more details: " + backContent.innerText);
    }
  });
});

// Scroll behavior to enhance user experience
document.querySelectorAll(".flip-back").forEach(back => {
  back.addEventListener("mouseover", function () {
    back.style.overflowY = "auto";  // Show scrollbar if content overflows
  });
  back.addEventListener("mouseout", function () {
    back.style.overflowY = "hidden";  // Hide scrollbar when not hovered
  });
});


particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"  /* Particle color */
    },
    "shape": {
      "type": "circle",  /* Particle shape */
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,  /* Particle transparency */
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1
      }
    },
    "size": {
      "value": 5,  /* Size of the particles */
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.1
      }
    },
    "line_linked": {
      "enable": true, /* Link particles with lines */
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"  /* Particles will move away when hovered */
      },
      "onclick": {
        "enable": true,
        "mode": "push"  /* More particles are added when clicked */
      }
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
