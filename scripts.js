// Reveal image in color when it's visible in the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.filter = 'grayscale(0%)';
    } else {
      entry.target.style.filter = 'grayscale(100%)';
    }
  });
}, {
  threshold: 0.3 // triggers when 30% of the image is visible
});

// Observe all images inside .entry
document.querySelectorAll('.entry img').forEach(img => {
  observer.observe(img);
});

// Randomly place the floating quotes on load
document.querySelectorAll('.floating-quote').forEach((quote, i) => {
  const top = Math.floor(Math.random() * 2500) + 100;
  const left = Math.floor(Math.random() * 80) + 5;
  quote.style.top = `${top}px`;
  quote.style.left = `${left}%`;
});

// Fade in when scrolled into view
const quoteObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.floating-quote').forEach(q => quoteObserver.observe(q));


