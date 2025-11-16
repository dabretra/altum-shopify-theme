document.addEventListener("DOMContentLoaded", function () {
  const site = document.querySelector(".site");
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".site-header__toggle");

  // Shrinking / scrolled header
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("site-header--scrolled");
    } else {
      header.classList.remove("site-header--scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Mobile nav toggle
  if (site && toggle) {
    toggle.addEventListener("click", function () {
      const isOpen = site.classList.toggle("is-nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
});
