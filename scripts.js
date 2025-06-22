// Place and animate floating quotes
document.querySelectorAll('.floating-quote').forEach((quote) => {
  const top = Math.floor(Math.random() * 80) + 10; // 10% to 90% viewport height
  const left = Math.floor(Math.random() * 80) + 10; // 10% to 90% viewport width
  quote.style.top = `${top}%`;
  quote.style.left = `${left}%`;

  const rotation = Math.floor(Math.random() * 30) - 15;
  quote.style.transform = `rotate(${rotation}deg)`;
});

// Fade them in when visible
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
