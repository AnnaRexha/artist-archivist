document.addEventListener("DOMContentLoaded", () => {
  // ==== Floating Quotes ====
  const quotes = document.querySelectorAll(".floating-quote");
  quotes.forEach((quote) => {
    const top = Math.random() * 90;
    const left = Math.random() * 90;
    quote.style.top = `${top}%`;
    quote.style.left = `${left}%`;
    setTimeout(() => quote.classList.add("visible"), 100);
  });

  // ==== Grayscale Fade-In (Images + Videos) ====
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.style.filter = entry.isIntersecting ? 'grayscale(0%)' : 'grayscale(100%)';
    });
  }, {
    threshold: 0.3
  });

  // Observe images
  document.querySelectorAll('.grid-item img').forEach(img => {
    imageObserver.observe(img);
  });

  // Observe videos
  document.querySelectorAll('.video-wrapper video').forEach(video => {
    imageObserver.observe(video);
  });

  // ==== Play Video on Button Click ====
  document.querySelectorAll(".video-item").forEach((item) => {
    const video = item.querySelector("video");
    const button = item.querySelector(".play-button");

    button.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent click from affecting parents
      if (video.paused) {
        video.play();
        button.style.display = "none";
      } else {
        video.pause();
        button.style.display = "block";
      }
    });

    video.addEventListener("ended", () => {
      button.style.display = "block";
    });
  });
});
