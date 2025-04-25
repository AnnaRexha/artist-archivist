// Example of initializing flip card behavior if you need dynamic actions

// Select all flip cards
const flipCards = document.querySelectorAll('.flip-card, .about-flip-card');

flipCards.forEach(card => {
  card.addEventListener('click', () => {
    const inner = card.querySelector('.flip-inner');
    inner.classList.toggle('flipped');
  });
});

document.querySelector("a[href='#about']").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});
