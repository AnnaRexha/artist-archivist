// Search function for the main page
document.getElementById("searchBox").addEventListener("input", function (e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".entry").forEach(entry => {
    entry.style.display = entry.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
});

// This function will allow the flip card to display content like audio, video, or text when flipped
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
    const flipInner = this.querySelector('.flip-inner');
    const flipFront = this.querySelector('.flip-front');
    const flipBack = this.querySelector('.flip-back');
    
    flipInner.classList.toggle('flipped');
    
    if (flipInner.classList.contains('flipped')) {
      flipBack.style.visibility = "visible";
      flipFront.style.visibility = "hidden";
    } else {
      flipBack.style.visibility = "hidden";
      flipFront.style.visibility = "visible";
    }
  });
});
