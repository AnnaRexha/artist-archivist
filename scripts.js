// ==== IMAGE FADE-IN ON SCROLL ====
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.filter = 'grayscale(0%)'; // Reveal in color
    } else {
      entry.target.style.filter = 'grayscale(100%)'; // Stay grayscale
    }
  });
}, {
  threshold: 0.3 // 30% visible triggers change
});

document.querySelectorAll('.grid-item img').forEach(img => {
  imageObserver.observe(img);
});


// script.js

document.addEventListener("DOMContentLoaded", () => {
  const quotes = document.querySelectorAll(".floating-quote");

  quotes.forEach((quote) => {
    const top = Math.random() * 90;
    const left = Math.random() * 90;
    quote.style.top = `${top}%`;
    quote.style.left = `${left}%`;

    // Delay to force fade-in
    setTimeout(() => {
      quote.classList.add("visible");
    }, 100);
  });
});

