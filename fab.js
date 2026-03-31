document.addEventListener("DOMContentLoaded", () => {
  const fabToggle = document.getElementById("fab-toggle");
  const fabOptions = document.getElementById("fab-options");

  if (fabToggle) {
    fabToggle.addEventListener("click", () => {
      fabOptions.style.display =
        fabOptions.style.display === "flex" ? "none" : "flex";
    });
  }

  document.querySelectorAll(".fab-option").forEach((button) => {
    button.addEventListener("click", () => {
      const href = button.getAttribute("href");
      if (href) {
        window.location.href = href;
      }
      if (fabOptions) {
        fabOptions.style.display = "none";
      }
    });
  });
});
