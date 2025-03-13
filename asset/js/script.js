// Dropdown
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 300);
  });
});

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

function openModal(title, description) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("skillModal").style.display = "block";
}
function closeModal() {
  document.getElementById("skillModal").style.display = "none";
}


