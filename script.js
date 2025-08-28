// Toggle job descriptions
document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isVisible = details.style.display === "block";

    // Toggle visibility
    details.style.display = isVisible ? "none" : "block";

    // Change button text
    button.textContent = isVisible ? "More ↓" : "Less ↑";
  });
});
