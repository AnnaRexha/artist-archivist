// Scroll-based grayscale to color transition
window.addEventListener('scroll', function () {
  const images = document.querySelectorAll('.entry img');
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      image.style.filter = 'grayscale(0%)';  // Turn image into color when visible
    } else {
      image.style.filter = 'grayscale(100%)';  // Keep image grayscale when not visible
    }
  });
});
