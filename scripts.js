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

// Scroll-triggered fade-in for quotes
const quoteElements = document.querySelectorAll('.quote-snippet');

const quoteObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      quoteObserver.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.1
});

quoteElements.forEach(quote => quoteObserver.observe(quote));

