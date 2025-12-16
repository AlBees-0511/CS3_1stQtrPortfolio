document.querySelectorAll(".lever").forEach(lever => {
  lever.addEventListener("click", () => {
    lever.classList.toggle("active");
  });
});