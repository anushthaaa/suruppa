document.addEventListener("DOMContentLoaded", () => {
  const fabToggle = document.getElementById("fab-toggle");
  const fabOptions = document.getElementById("fab-options");
  const content = document.getElementById("content");

  fabToggle.addEventListener("click", () => {
    fabOptions.style.display =
      fabOptions.style.display === "flex" ? "none" : "flex";
  });

  document.querySelectorAll(".fab-option").forEach((button) => {
    button.addEventListener("click", () => {
      const file = button.getAttribute("data-section");
      fetch(`sections/${file}`)
        .then((res) => res.text())
        .then((html) => {
          content.innerHTML = html;
          window.scrollTo(0, 0);
        });
      fabOptions.style.display = "none";
    });
  });
});
