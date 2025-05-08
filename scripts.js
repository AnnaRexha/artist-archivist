// Search functionality
document.getElementById("searchBox").addEventListener("input", function (e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".entry").forEach(entry => {
    entry.style.display = entry.innerText.toLowerCase().includes(term) ? "block" : "none";
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
  particles: {
    number: {
      value: window.innerWidth < 768 ? 30 : 100, // Reduce particles for mobile screens
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
