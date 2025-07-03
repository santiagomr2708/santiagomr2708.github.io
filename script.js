console.log("Página cargada correctamente.");

// Menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('open');
});

// Filtro de proyectos por categoría
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-filter");

    // Cambiar botón activo
    document.querySelectorAll(".tab-button").forEach((btn) =>
      btn.classList.remove("active")
    );
    button.classList.add("active");

    // Filtrar tarjetas
    document.querySelectorAll(".project-card").forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      card.style.display = cardCategory === category ? "flex" : "none";
    });
  });
});

// Mostrar solo los de la categoría activa al cargar
window.addEventListener("DOMContentLoaded", () => {
  const activeBtn = document.querySelector(".tab-button.active");
  if (activeBtn) activeBtn.click();
});
