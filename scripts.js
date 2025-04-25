document.getElementById("searchBox").addEventListener("input", function (e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".entry").forEach(entry => {
    entry.style.display = entry.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
});
