<script>
  // Show/Hide About section
  document.getElementById("aboutBtn").onclick = function () {
    document.getElementById("about").classList.toggle("show");
  };

  // Search filter
  document.getElementById("searchBox").addEventListener("input", function (e) {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".entry").forEach(entry => {
      entry.style.display = entry.innerText.toLowerCase().includes(term) ? "block" : "none";
    });
  });
</script>

