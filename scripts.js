document.addEventListener("DOMContentLoaded", () => {
  // ===== Floating Quotes (respect prefers-reduced-motion) =====
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const quotes = document.querySelectorAll(".floating-quote");
  quotes.forEach((quote) => {
    const top = 5 + Math.random() * 80;   // avoid edges
    const left = 5 + Math.random() * 80;
    quote.style.top = `${top}%`;
    quote.style.left = `${left}%`;
    if (prefersReducedMotion) {
      quote.style.animation = "none";
    }
    setTimeout(() => quote.classList.add("visible"), 100);
  });

  // ===== Grayscale Fade-In (Images + Videos) =====
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.style.filter = entry.isIntersecting ? 'grayscale(0%)' : 'grayscale(100%)';
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.grid-item img, .video-wrapper video').forEach(el => imageObserver.observe(el));

  // ===== Play/Pause video with button (kept your behavior, added a11y) =====
  document.querySelectorAll(".video-item").forEach((item) => {
    const video = item.querySelector("video");
    const button = item.querySelector(".play-button");

    const syncButton = () => {
      const playing = !video.paused && !video.ended;
      button.style.display = playing ? "none" : "block";
      button.setAttribute("aria-pressed", playing ? "true" : "false");
    };

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      if (video.paused) video.play(); else video.pause();
      syncButton();
    });

    video.addEventListener("ended", syncButton);
    video.addEventListener("pause", syncButton);
    video.addEventListener("play", syncButton);
    syncButton();
  });

  // ===== Archive: sort by date, insert year separators, and live search =====
  const grid = document.getElementById("archiveGrid");
  const cards = Array.from(grid.querySelectorAll(".grid-item"));

  // Parse date helper
  const getDate = (el) => {
    const d = el.dataset.date || "";
    // Force YYYY-MM-DD; fallback to epoch 0 if missing
    return d.match(/^\d{4}-\d{2}-\d{2}$/) ? new Date(d) : new Date(0);
  };

  // Sort newest → oldest
  cards.sort((a, b) => getDate(b) - getDate(a));
  cards.forEach(c => grid.appendChild(c)); // re-append in order

  // Insert year separators
  const addYearSeparators = () => {
    // Remove old separators
    grid.querySelectorAll(".year-separator").forEach(s => s.remove());

    let currentYear = null;
    const visibleCards = Array.from(grid.children).filter(el => el.classList.contains("grid-item") && el.style.display !== "none");

    visibleCards.forEach((card) => {
      const year = (card.dataset.date || "").slice(0, 4);
      if (year && year !== currentYear) {
        currentYear = year;
        const sep = document.createElement("div");
        sep.className = "year-separator";
        sep.textContent = year;
        // Insert before the first card of that year
        grid.insertBefore(sep, card);
      }
    });
  };

  // Live search (title + tags)
  const searchBox = document.getElementById("searchBox");
  const filterCards = () => {
    const q = (searchBox.value || "").trim().toLowerCase();
    cards.forEach(card => {
      const hay = [
        card.dataset.title || "",
        card.dataset.tags  || "",
        card.dataset.date  || ""
      ].join(" ").toLowerCase();
      card.style.display = hay.includes(q) ? "" : "none";
    });
    addYearSeparators();
  };
  searchBox.addEventListener("input", filterCards);

  // Initial separators
  addYearSeparators();
});
