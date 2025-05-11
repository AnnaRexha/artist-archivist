// Reveal image in color when it's visible in the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.filter = 'grayscale(0%)'; // Image becomes colorful
    } else {
      entry.target.style.filter = 'grayscale(100%)'; // Image stays grayscale
    }
  });
}, {
  threshold: 0.3 // triggers when 30% of the image is visible
});

// Observe all images inside .entry
document.querySelectorAll('.entry img').forEach(img => {
  observer.observe(img);
});

// Randomly place the floating quotes like constellations
document.querySelectorAll('.floating-quote').forEach((quote) => {
  // Randomly assign position for quotes (within specific bounds)
  const top = Math.floor(Math.random() * 80) + 10; // 10% to 90% of the viewport height
  const left = Math.floor(Math.random() * 80) + 10; // 10% to 90% of the viewport width
  quote.style.top = `${top}%`;
  quote.style.left = `${left}%`;

  // Randomly rotate quotes slightly for a more organic look
  const rotation = Math.floor(Math.random() * 30) - 15; // Random rotation between -15 and 15 degrees
  quote.style.transform = `rotate(${rotation}deg)`;
});

// Fade in quotes when they are scrolled into view
const quoteObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add 'visible' class when scrolled into view
    }
  });
}, {
  threshold: 0.1 // Fade in when 10% of the quote is visible
});

// Observe all quotes
document.querySelectorAll('.floating-quote').forEach(q => quoteObserver.observe(q));
