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

// ==== FLOATING QUOTES SETUP ====
document.querySelectorAll('.floating-quote').forEach((quote) => {
  const top = Math.floor(Math.random() * 80) + 10; // 10%–90% viewport height
  const left = Math.floor(Math.random() * 80) + 10; // 10%–90% viewport width
  quote.style.top = `${top}%`;
  quote.style.left = `${left}%`;

  const rotation = Math.floor(Math.random() * 30) - 15; // -15° to +15°
  quote.style.transform = `rotate(${rotation}deg)`;
});

// ==== FADE IN QUOTES WHEN SCROLLED INTO VIEW ====
const quoteObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add fade-in class
    }
  });
}, {
  threshold: 0.1 // 10% visible
});

document.querySelectorAll('.floating-quote').forEach(q => quoteObserver.observe(q));
