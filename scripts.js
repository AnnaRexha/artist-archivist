// Search functionality
document.getElementById("searchBox").addEventListener("input", function (e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".entry").forEach(entry => {
    entry.style.display = entry.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
});

// Flip card interaction (optional for improving UX with mouse hover)
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("mouseover", function () {
    const flipInner = card.querySelector(".flip-inner");
    if (flipInner) {
      flipInner.style.transition = "transform 0.8s";
      flipInner.style.transform = "rotateY(180deg)";
    }
  });

  card.addEventListener("mouseout", function () {
    const flipInner = card.querySelector(".flip-inner");
    if (flipInner) {
      flipInner.style.transition = "transform 0.8s";
      flipInner.style.transform = "rotateY(0deg)";
    }
  });
});

// Adding active state for entries
document.querySelectorAll(".entry").forEach(entry => {
  entry.addEventListener("click", function () {
    // Toggle a class for active or focused card (could be styled differently in CSS)
    entry.classList.toggle("active");
  });
});

// Optionally, if you want to allow click to expand story content in a modal or some detail panel
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", function () {
    const backContent = card.querySelector(".flip-back .story-content");
    if (backContent) {
      // Example: open in a modal or expand the content within the same page
      alert("Showing more details: " + backContent.innerText);
    }
  });
});

// Scroll behavior to enhance user experience
document.querySelectorAll(".flip-back").forEach(back => {
  back.addEventListener("mouseover", function () {
    back.style.overflowY = "auto";  // Show scrollbar if content overflows
  });
  back.addEventListener("mouseout", function () {
    back.style.overflowY = "hidden";  // Hide scrollbar when not hovered
  });
});
