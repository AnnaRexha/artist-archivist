// Smooth scrolling when clicking links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll-based grayscale to color transition
window.addEventListener('scroll', function() {
  const images = document.querySelectorAll('.entry img');
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      image.style.filter = 'grayscale(0%)';
    } else {
      image.style.filter = 'grayscale(100%)';
    }
  });
});
