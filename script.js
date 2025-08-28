// Expand/Collapse Experience
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
      button.textContent = "More ↓";
    } else {
      details.style.display = "block";
      button.textContent = "Less ↑";
    }
  });
});
