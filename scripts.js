
document.querySelector("a[href='#about']").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});
