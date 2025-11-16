document.addEventListener("DOMContentLoaded", function () {
  const site = document.querySelector(".site");
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".site-header__toggle");
  const megaItem = document.querySelector(".site-nav__item--has-mega");
  const megaLink = megaItem ? megaItem.querySelector("a") : null;

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

  // Desktop mega menu toggle for "Shop"
  if (megaItem && megaLink) {
    megaLink.addEventListener("click", function (e) {
      // On desktop, use click to open mega menu.
      // On mobile (<=900px), behave like a normal link.
      if (window.innerWidth <= 900) {
        return;
      }

      e.preventDefault();

      const isOpen = megaItem.classList.toggle("is-mega-open");
      // If you want the header to stay active, you could also
      // add a class to the header here, but not required.
    });

    // Close mega menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!megaItem.classList.contains("is-mega-open")) return;
      if (!megaItem.contains(e.target)) {
        megaItem.classList.remove("is-mega-open");
      }
    });
  }
});
