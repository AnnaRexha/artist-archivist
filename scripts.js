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
